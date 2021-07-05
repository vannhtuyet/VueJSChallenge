<template>
  <div>
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <q-card class="q-pa-lg">
        <q-tabs v-model="tab"
                dense
                class="text-grey"
                active-color="primary"
                indicator-color="primary"
                align="left">
          <q-tab name="pending" :class="tab=='pending'?'primary':''" label="Pending Requests" />
          <q-tab name="completed" :class="tab=='completed'?'primary':''" label="Completed Requests" />
        </q-tabs>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="pending" class="q-pa-md">
            <!--<div class="q-pa-md" v-if="pendingRequest.length">No item</div>-->
            <div v-for="item in pendingRequest">
              <q-input v-model="item.amountTotal" filled label="Account Name" class="q-pa-md"></q-input>
              <q-input v-model="item.amountTotal" filled label="Amount Total" class="q-pa-md"></q-input>
              <q-input v-model="item.period" filled label="Period" class="q-pa-md"></q-input>
              <div class="float-right">
                <q-btn @click="rejectRequest(item)" label="Reject" class="q-ma-md bg-indigo text-white"></q-btn>
                <q-btn @click="approveRequest(item)" label="Approve" class="q-ma-md bg-indigo text-white"></q-btn>
              </div>
            </div>
          </q-tab-panel>

          <!--<q-tab-panel name="completed" class="q-pa-md">-->
            <!--<div class="q-pa-md" v-if="completedRequest.length">No item</div>-->
            <!--<div v-for="item in completedRequest">
              <q-input readonly v-model="item.amountTotal" filled label="Amount Total"></q-input>
              <q-input readonly v-model="item.period" filled label="Period"></q-input>
            </div>
          </q-tab-panel>-->
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AdminView',
    data() {
      return {
        tab: 'pending',
        loanRequests: [],
        pendingRequest: [],
        completedRequest: []
      }
    },
    created() {
      this.getAllRequests();
    },
    methods: {
      getAllRequests() {
        this.loanRequests = this.$store.state.loans;
        if (this.loanRequests.length > 0) {
          this.pendingRequest = this.loanRequests.filter(request => request.status == "Pending");
          this.testPendingRequest = this.pendingRequest;
          this.completedRequest = this.loanRequests.filter(request => request.status != "Pending" && request.status != "None");
        }
      },
      approveRequest(loan) {
        loan.status = "Approve";
        this.$store.dispatch("setLoanStatus", loan);
      },
      rejectRequest(loan) {
        loan.status = "Reject";
        this.$store.dispatch("setLoanStatus", loan);
      }
    }
  }
</script>

