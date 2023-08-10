import { View, Text } from 'react-native'
import React from 'react'
import { Expenses } from '@/constants/expenses'

interface Props {
    lastExpense: Expenses
}


const LastExpenseItem = ({ lastExpense }: Props) => {
    return (
        <View className='flex flex-row justify-between p-3 mb-3 rounded-md bg-gray-50'>
            <View>
                <Text className='text-sm font-medium'>{lastExpense.title}</Text>
                <Text className='text-gray-400 '>{lastExpense.description}</Text>
            </View>
            <Text className='text-gray-400'>{lastExpense.date}</Text>
        </View>
    )
}

export default LastExpenseItem