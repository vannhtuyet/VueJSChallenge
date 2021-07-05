<template>
  <div>
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <q-card class="q-pa-lg">
        <div class="row">
          <div class="col-sm-3">
            Available balance
            <div class="text-subtitle2">$$3,000</div>
          </div>
          <div class="col-sm-9">
            <q-btn label="New card" icon="fas fa-plus-circle" class="bg-indigo text-white float-right" no-caps></q-btn>
          </div>
        </div>
        <q-tabs v-model="tab"
                dense
                class="text-grey"
                active-color="primary"
                indicator-color="primary"
                align="left">
          <q-tab name="mycards" :class="tab=='mycards'?'primary':''" label="My debit cards" />
          <q-tab name="companycards" :class="tab=='companycards'?'primary':''" label="All company cards" />
        </q-tabs>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mycards" class="q-pa-md">
            <div class="q-pa-md">
              <div class="row">
                <div class="col-md-6 q-pa-md">
                  <div class="q-pa-md">
                    <div class="row">
                      <q-space />
                      <q-btn flat class="text-right text-green" no-caps>
                        <q-icon :name="isPwd ? 'visibility' : 'visibility'"
                                class="cursor-pointer"
                                @click="isPwd = !isPwd" />
                        Show card number
                      </q-btn>
                    </div>
                  </div>
                  <div class="q-pa-md">
                    <q-card class="bg-positive text-white q-pa-md">
                      <q-card-section>
                        <div class="text-right text-weight-medium text-h6">
                          aspire
                        </div>
                        <div class="text-weight-medium text-h5">Mark Henry</div>
                        <q-input readonly borderless v-model="password" :type="isPwd ? 'password' : 'text'">
                        </q-input>
                        <div class="row">
                          <div class="col-md-4">Thru: 12/20</div>
                          <div class="col-md-4"> CVV: ***</div>
                        </div>
                        <div class="text-right text-weight-medium text-h6">VISA</div>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="q-pa-md">
                    <q-card class="bg-indigo-1 q-pa-md">
                      <div class="row">
                        <div class="col-md-2">
                          <q-btn flat stack no-caps>
                            <q-avatar color="indigo-10" class="text-white" icon="fas fa-snowflake" size="xs"></q-avatar>
                            Freeze card
                          </q-btn>
                        </div>
                        <div class="col-md-3">
                          <q-btn flat no-caps>
                            <q-avatar color="indigo-10" class="text-white" icon="fas fa-tachometer-alt" size="xs"></q-avatar>
                            Set spend limit
                          </q-btn>
                        </div>
                        <div class="col-md-2">
                          <q-btn flat no-caps>
                            <q-avatar color="indigo-10" class="text-white" icon="fab fa-google" size="xs"></q-avatar>
                            Add to GPay
                          </q-btn>
                        </div>
                        <div class="col-md-3">
                          <q-btn flat no-caps>
                            <q-avatar color="indigo-10" class="text-white" icon="fas fa-undo" size="xs"></q-avatar>
                            Replace card
                          </q-btn>
                        </div>
                        <div class="col-md-2">
                          <q-btn flat no-caps>
                            <q-avatar color="indigo-10" class="text-white" icon="fas fa-trash" size="xs"></q-avatar>
                            Cancel card
                          </q-btn>
                        </div>
                      </div>
                    </q-card>
                  </div>
                </div>
                <div class="col-md-6 q-pa-md">
                  <div class="q-pa-md">
                    <q-list bordered class="rounded-borders">
                      <q-expansion-item v-model="expanded"
                                        icon="far fa-credit-card"
                                        label="Card detail">
                        <q-card>
                          <q-card-section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                            eveniet doloribus ullam aliquid.
                          </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </q-list>
                  </div>
                  <div class="q-pa-md">
                    <q-list bordered class="rounded-borders">
                      <q-expansion-item v-model="expanded"
                                        icon="fas fa-exchange-alt"
                                        label="Recent transactions">
                        <q-card>
                          <q-card-section>
                            <q-list>
                              <q-item clickable v-ripple>
                                <q-item-section avatar>
                                  <q-avatar color="indigo" text-color="white" icon="fas fa-trash" />
                                </q-item-section>
                                <q-item-section>
                                  <q-item-label>Hamsley</q-item-label>
                                  <q-item-label caption lines="2">20 May 2020</q-item-label>
                                  <q-item-label lines="2">
                                    <q-avatar color="indigo" text-color="white" icon="fas fa-credit-card" size="xs" />
                                    Refund on debit card
                                  </q-item-label>
                                </q-item-section>
                                <q-item-section side top>
                                  <q-item-label class="text-secondary">
                                    +S$ 150
                                    <q-icon flat name="fas fa-chevron-right" style="color: #ccc;" size="xs"></q-icon>
                                  </q-item-label>
                                </q-item-section>
                              </q-item>
                              <q-separator inset />
                              <q-item clickable v-ripple>
                                <q-item-section avatar>
                                  <q-avatar color="indigo" text-color="white" icon="fas fa-plane-departure" />
                                </q-item-section>
                                <q-item-section>
                                  <q-item-label>Hamsley</q-item-label>
                                  <q-item-label caption lines="2">20 May 2020</q-item-label>
                                  <q-item-label lines="2">
                                    <q-avatar color="indigo" text-color="white" icon="fas fa-credit-card" size="xs" />
                                    Changed to debit card
                                  </q-item-label>
                                </q-item-section>
                                <q-item-section side top>
                                  <q-item-label>
                                    -S$ 150
                                    <q-icon flat name="fas fa-chevron-right" style="color: #ccc;" size="xs"></q-icon>
                                  </q-item-label>
                                </q-item-section>
                              </q-item>
                              <q-separator inset />
                              <q-item clickable v-ripple>
                                <q-item-section avatar>
                                  <q-avatar color="indigo" text-color="white" icon="fas fa-volume-off" />
                                </q-item-section>
                                <q-item-section>
                                  <q-item-label>Hamsley</q-item-label>
                                  <q-item-label caption lines="2">20 May 2020</q-item-label>
                                  <q-item-label lines="2">
                                    <q-avatar color="indigo" text-color="white" icon="fas fa-credit-card" size="xs" />
                                    Changed to debit card
                                  </q-item-label>
                                </q-item-section>
                                <q-item-section side top>
                                  <q-item-label>
                                    -S$ 150
                                    <q-icon flat name="fas fa-chevron-right" style="color: #ccc;" size="xs"></q-icon>
                                  </q-item-label>
                                </q-item-section>
                              </q-item>
                              <q-separator inset />
                              <q-item clickable v-ripple>
                                <q-item-section avatar>
                                  <q-avatar color="indigo" text-color="white" icon="fas fa-trash" />
                                </q-item-section>
                                <q-item-section>
                                  <q-item-label>Hamsley</q-item-label>
                                  <q-item-label caption lines="2">20 May 2020</q-item-label>
                                  <q-item-label lines="2">
                                    <q-avatar color="indigo" text-color="white" icon="fas fa-credit-card" size="xs" />
                                    Refund on debit card
                                  </q-item-label>
                                </q-item-section>
                                <q-item-section side top>
                                  <q-item-label>
                                    -S$ 150
                                    <q-icon flat name="fas fa-chevron-right" style="color: #ccc;" size="xs"></q-icon>
                                  </q-item-label>
                                </q-item-section>
                              </q-item>
                            </q-list>
                          </q-card-section>
                          <q-card-actions class="bg-green-2 text-green" align="center">
                            <q-btn flat>View all card transactions</q-btn>
                          </q-card-actions>
                        </q-card>
                      </q-expansion-item>
                    </q-list>
                  </div>
                </div>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="companycards" class="q-pa-md">
            Nothing to show
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyCards',
    data() {
      return {
        tab: 'mycards',
        cardnumber: '2012 2016 5204 7152',
        isPwd: true,
        password: "0210201820792020"
      }
    }
  }
</script>

