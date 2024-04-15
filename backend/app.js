import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import appRouter from './routes/index.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import stripe from 'stripe';


config();

const stripeSecretKey = process.env.STRIPE_SECRET;
const stripeInstance = stripe(stripeSecretKey);

const app = express();

// Middlewares
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

// Checkout API endpoint
app.post("/api/create-checkout-session", async (req, res) => {
    try {
        const dataArray = req.body;
        const product = [dataArray];
        const exchangeRate = 75;

        const session = await stripeInstance.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: product.map((product) => ({
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: product.plan,
                        description: product.features.join(', '),
                    },
                    unit_amount: parseFloat(product.price) * 100,
                },
                quantity: 1,
            })),
            mode: "payment",
            success_url: "http://localhost:5173/success",
            cancel_url: "http://localhost:5173/cancel",
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating checkout session:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Remove it in production
app.use(morgan('dev'));

app.use('/api/v1', appRouter);

export default app;
