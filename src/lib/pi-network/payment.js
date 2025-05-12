import {fetchClient} from "@/lib/pi-network/api/client-fetch";
import {piClient} from "@/lib/pi-network/sdk";

export const onIncompletePaymentFound = async (payment) => {
	try {
		const {	message	} = await fetchClient("/api/reload/payments/incomplete", "POST", { payment });

		return alert(message)
	} catch (err) {
		return alert(err.message);
	}
};

const onReadyForServerApproval = async (paymentId) => {
	try {
		await fetchClient("/api/payments/approve", "POST", { paymentId });
	} catch (err) {
		return alert(`onReadyForServerApproval: ${err}`);
	}
}

const onReadyForServerCompletion =  async (paymentId, txid) => {
	try {
		const {message} = await fetchClient("/api/payments/complete", "POST", { paymentId, txid });
		alert(message);
	} catch (err) {
		return alert(`onReadyForServerCompletion: ${err}`);
	}


};

const onCancel = async (paymentId) => {
	try {
		const {message} = await fetchClient("/api/payments/cancelled_payment", "POST", { paymentId });
		alert(message);
	} catch (err) {
		return alert(`onCancel: ${err}`);
	}
};

const onError = async (error, payment) => {
	return alert(`onError: ${error}`);
};

const callbacks = {
	onReadyForServerApproval,
	onReadyForServerCompletion,
	onCancel,
	onError,
}

export const createPayment = async (memo, amount, metadata) => {
	if (!memo || !amount || !metadata) return alert("One or more arguments missing!");

	const { createPiPayment } = piClient();

	createPiPayment({ memo, amount, metadata }, callbacks);
};
