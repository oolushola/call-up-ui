<template>
	<wallet>
		<transactions />
	</wallet>
</template>

<script>
import Wallet from "../../components/Wallet/Wallet.vue";
import Transactions from "./Transactions.vue";
export default {
	components: {
		wallet: Wallet,
		transactions: Transactions,
	},
};
</script>