<?php

namespace App\Http\Controllers;

use Stripe\Stripe;
use App\Models\Item;
use Illuminate\Http\Request;
use Stripe\Checkout\Session;

class PaymentController extends Controller
{
    /**
     * Provision a new web server.
     */
    public function __invoke(Request $request, Item $item)
    {
        $item->load('image');
        $quantity = $request->query('quantity', 1);
        Stripe::setApiKey(env('STRIPE_SECRET'));

        $checkoutSession = Session::create([
            'submit_type' => 'pay',
            'mode' => 'payment',
            'payment_method_types' => ['card'],
            'billing_address_collection' => 'auto',
            'line_items'  => [
                [
                    'price_data' => [
                        'currency' => 'usd',
                        'product_data' => [
                            'name'   => $item->title,
                            'images' => [$item->image->original]
                        ],
                        'unit_amount' => $item->price * 100
                    ],
                    'adjustable_quantity' => [
                        'enabled' => true,
                        'minimum' => 1
                    ],
                    'quantity' => $quantity
                ]
            ],
            'success_url' => env('APP_URL') . '/items/search',
            'cancel_url'  => env('APP_URL') . '/items/' . $item->id
        ]);

        return redirect($checkoutSession->url);
    }
}

