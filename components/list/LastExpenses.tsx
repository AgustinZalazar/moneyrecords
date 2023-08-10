import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Expenses } from '@/constants/expenses'
import LastExpenseItem from './lastExpenseItem'

interface Props {
    lastExpenses: Expenses[]
}


const LastExpenses = ({ lastExpenses }: Props) => {
    return (
        <View className='h-72'>
            <FlatList
                data={lastExpenses}
                renderItem={({ item }) => <LastExpenseItem lastExpense={item} />}
                horizontal={false}
            />
        </View>
    )
}

export default LastExpenses