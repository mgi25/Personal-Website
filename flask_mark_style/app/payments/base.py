class PaymentAdapter:
    def create_checkout_session(self, user, plan):
        raise NotImplementedError

    def handle_webhook(self, data):
        raise NotImplementedError
