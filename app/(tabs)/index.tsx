import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from '@rneui/themed';
import LastExpenses from '@/components/list/LastExpenses';

const last_expenses = [
  {
    id: 1,
    title: 'Testing 1',
    description: 'testing description',
    date: new Date().toDateString()
  },
  {
    id: 2,
    title: 'Testing 2',
    description: 'testing description',
    date: new Date().toDateString()
  },
  {
    id: 3,
    title: 'Testing 3',
    description: 'testing description',
    date: new Date().toDateString()
  },
  {
    id: 4,
    title: 'Testing 4',
    description: 'testing description',
    date: new Date().toDateString()
  },
  {
    id: 5,
    title: 'Testing 4',
    description: 'testing description',
    date: new Date().toDateString()
  },
  {
    id: 6,
    title: 'Testing 4',
    description: 'testing description',
    date: new Date().toDateString()
  },
  {
    id: 7,
    title: 'Testing 4',
    description: 'testing description',
    date: new Date().toDateString()
  },
  {
    id: 8,
    title: 'Testing 4',
    description: 'testing description',
    date: new Date().toDateString()
  },

]


export default function TabOneScreen() {
  return (
    <SafeAreaView className='h-full p-4 bg-white '>
      <Text className='text-gray-400 '>Your balance</Text>
      <Text className='mt-3 mb-4 text-4xl font-bold'> $500.000</Text>
      <View className='p-4 rounded-md shadow-lg shadow-indigo-500/40'>
        <Text className='mb-3 text-lg font-normal'>Last expenses</Text>
        <LastExpenses lastExpenses={last_expenses} />
      </View>
      <View className='mt-4'>
        <Text className='mb-4 text-lg font-medium'>Savings</Text>
        <View className='flex flex-row flex-wrap items-center justify-between h-full'>
          <View className='flex items-center w-[45%] p-4 rounded-md shadow-lg shadow-indigo-500/40'>
            <View>
              <Icon
                type='material-community'
                name='cash-multiple' />
            </View>
            <Text className='text-md'>General</Text>
            <Text>$ 4000</Text>
          </View>
          <View className='flex items-center w-[45%] p-4 rounded-md shadow-lg shadow-indigo-500/40'>
            <View>
              <Icon
                type='material-community'
                name='cash-multiple' />
            </View>
            <Text className='text-md'>Holidays</Text>
            <Text>$ 2000</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
