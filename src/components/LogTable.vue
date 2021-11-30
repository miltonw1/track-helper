<template>
<div class="q-pa-md" style="width: 60%">
    <q-table
    title="Daily log"
    :rows="rows"
    :columns="columns"
    row-key="name"
    dark
    color="amber"
    hide-bottom
    />
</div>
</template>

<script>
const columns = [
{
    name: 'name',
    required: true,
    label: 'Description',
    align: 'left',
    field: row => row.name
},
{ name: 'amount', align: 'center', label: 'Amount', field: 'amount', sortable: false },
{ name: 'unit', label: 'Unit', field: 'unit', sortable: false },
{ name: 'energy', label: 'Energy (kcal)', field: 'energy' },
]

const rows = [
{
    name: 'Frozen Yogurt',
    amount: 20,
    unit: 'g',
    energy: 80,
}
]

export default {
setup () {
    return {
    columns,
    rows
    }
}
}
</script>
