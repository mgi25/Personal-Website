from .base import PaymentAdapter


class StripeAdapter(PaymentAdapter):
    def create_checkout_session(self, user, plan):
        return {
            'checkout_url': 'https://stripe.test/checkout',
            'plan': plan,
        }

    def handle_webhook(self, data):
        return True
