<template>
  <div class="q-pa-lg height-page">
    <q-btn
      v-if="isBypassTimeout"
      color="red"
      label="bypass timeout"
      class="q-mb-md"
      @click="$emit('is-empty', true)"
    />

    <q-table
      title="List Pending Transaction"
      :rows="rows"
      :columns="columns"
      :filter="query"
      :page="pagination"
      row-key="trans_code"
      table-header-class="bg-secondary-v3 text-white"
    >
      <template #top-right>
        <q-input
          v-model="query"
          autocomplete="off"
          borderless
          dense
          debounce="300"
          placeholder="Search"
        >
          <template #append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template #header-cell="lists">
        <q-th :lists="lists" style="font-weight: bold">
          {{ lists.col.label }}
        </q-th>
      </template>
      <template #body="lists">
        <q-tr :lists="lists" align="center">
          <q-td key="trxDate" :lists="lists">
            {{ lists.row.trxdate || "-" }}
          </q-td>
          <q-td key="func_id" :lists="lists">
            {{ lists.row.funcid || "-" }}
          </q-td>
          <q-td key="id" :lists="lists">
            {{ lists.row.useridapp || "-" }}
          </q-td>
          <q-td key="statusnds" :lists="lists">
            {{ lists.row.statusnds || "-" }}
          </q-td>
          <q-td key="debitaccountnumber" :lists="lists">
            {{ lists.row.debitaccountnumber || "-" }}
          </q-td>
          <q-td key="creditaccountnumber" :lists="lists">
            {{ lists.row.creditaccountnumber || "-" }}
          </q-td>
          <q-td key="amount" :lists="lists">
            {{ lists.row.amount }}
          </q-td>
          <q-td key="labelEC" :lists="lists">
            {{ lists.row.labelEC }}
          </q-td>
          <q-td key="actions" :lists="lists">
            <q-btn
              outline
              no-caps
              color="primary"
              :label="lists.row.labelBtn"
              size="sm"
              @click="onClickStatus(lists.row)"
            />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import {
  QTable,
  QBtn,
  QTr,
  QTd,
  QTh,
  QField,
  QSelect,
  QIcon,
  QMenu,
  QChip, QItem, QInput, QPagination
} from "quasar";
export default {
  components: {
    QTable,
    QBtn,
    QTr,
    QTd,
    QTh,
    QField,
    QSelect,
    QIcon,
    QMenu,
    QChip, QItem, QInput,  QPagination
  },
  data() {
    return {
      columns: [
        {
          name: "trxdate",
          align: "center",
          label: "Date",
          field: "trxdate",
          sortable: true,
        },
        {
          name: "funcid",
          required: true,
          label: "Tran Code",
          align: "center",
          field: "funcid",
          sortable: true,
        },
        {
          name: "id",
          required: true,
          label: "Spv ID",
          align: "center",
          field: "id",
          sortable: true,
        },
        {
          name: "statustrx",
          align: "center",
          label: "Status",
          field: "statusnds",
          sortable: true,
        },
        {
          name: "debitaccountnumber",
          align: "center",
          label: "Debit Account",
          field: "debitaccountnumber",
          sortable: true,
        },
        {
          name: "creditaccountnumber",
          align: "center",
          label: "Credit Account",
          field: "creditaccountnumber",
          sortable: true,
        },
        {
          name: "amount",
          align: "center",
          label: "Amount",
          sortable: true,
        },
        {
          name: "labelEC",
          align: "center",
          label: "EC",
          field: "labelEC",
          sortable: true,
        },
        {
          name: "actions",
          align: "center",
          label: "Actions",
          field: "actions",
          sortable: true,
        },
      ],
      rows: [
        {
          id: 60,
          jurnalseq: "",
          jurnalseqcorrection: "",
          refnum: "",
          funcid: "Cash Withdrawal",
          trxdate: "2022-06-21 09:45:37",
          debitaccountnumber: "100010000001",
          debitamount: "1000000.00",
          currencydebit: "IDR",
          creditaccountnumber: "CASH",
          creditamount: "1000000.00",
          currencycredit: "IDR",
          nominalfee: "0.00",
          customername: "KAS KANTOR",
          useridreq: "0206406",
          useridapp: "",
          branch: "0206",
          bucket: "",
          statustrx: "01",
          statusdesctrx: "Transaction Not Found",
          server: "gl-service-nds-78cc94d944-j9vgl",
          flag: "0",
          payload:
            '{"REQUEST":{"DEBIT_ACCOUNT":"100010000001","DEBIT_AMOUNT":"1000000.00","BUY_RATE":"10000000","SELL_RATE":"10000000","CREDIT_AMOUNT":"1000000.00","EFFECTIVE_DATE":"","DEBIT_CURRENCY":"IDR","CREDIT_CURRENCY":"IDR","REMARK1":"","REMARK2":"","REMARK3":""}}',
          serviceidesb: "0002A",
          esbendpoint:
            "http://10.35.65.148:6001/invoke/bri.core.services.v2:cashWithdrawal",
          externalid: "374f2cb3-d549-4194-a9e8-a4d70e634722",
          rootid: "",
          statusnds: "2 - Failed",
          esbmessage: "Transaction Not Found",
          esberrorcode: "ES-006",
          esbresponsecode: "01",
          isec: "0",
          prodtype: "",
          debitaccountname: "",
          creditaccountname: "",
          passbooktype: "",
          amount: "1,000,000.00",
        },
      ],
      query: "",
      pagination: {},
      isBypassTimeout: true,
    };
  },
};
</script>

