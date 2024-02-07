import { StyleSheet, Text, View, TextInput, Image,ScrollView, TouchableOpacity ,Platform} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import Latest from '@/components/Latest';
import { Search } from '@/components/Icons';
import { useData } from '@/DataContext';

interface SearchResult {
  data: {
    custId: string;
    deliveryTime: string;
    orderId: string;
    packageTypeDesc: string;
    paymentStatus: boolean;
    pickupTime: string;
    receiverAddress: string;
    receiverName: string;
    receiverPhoneNumber: string;
    receiverzoneName: string;
    senderAddress: string;
    senderName: string;
    senderPhoneNumber: string;
    senderZoneName: string;
    status: string;
    totalAmount: number;
  };
  responseCode: string;
  responseDesc: string;
}



const Index = () => {
  const {data}=useData()
  const [error, setError] = useState('');
  const [orderId, setOrderId] = useState('');
  const [searchdata, setsearchData] = useState<SearchResult | null>(null);

  const handleSearch = async () => {
    try {
      if (!orderId.trim()) { // Check if orderId is empty or whitespace
        setError('Please enter a tracking number');
        setsearchData(null)
        return;
      }

      const response = await fetch(`https://coding.zippy.com.gh/api/get_order_details?orderId=${orderId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${data?.accessToken}` // Null check on data
        },
      });
      const result = await response.json();
      if (response.ok) {
        setsearchData(result);
     
        return result;
      } else {
        setError('No search found'); // Set error message for incorrect login
      }
    } catch (error) {
      console.error('Search Error:', error);
      setError('An error occurred during Searching'); // Set error message for other errors
    }
  };



  

  return (
    <View style={styles.container}>
       <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <View style={styles.header}>
        <Text style={{ fontSize: 16 }}>Hi, {data?.data?.name}</Text>
        <Text style={{ color: '#8C8FA5' }}>Track and monitor your packages</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text1}>Track your parcel</Text>
        <Text style={styles.text2}>
          Enter your parcel tracking number
        </Text>
<View style={{flexDirection:'row',gap:4}}>
  <View style={{backgroundColor:'white',flexDirection:'row',alignItems:'center',padding:5,flex:1,borderRadius:8}}>
    <View style={{paddingLeft:5}}>
    <Search/>
    </View>
  
    <TextInput placeholder='Enter tracking number' style={{padding:5}} onChangeText={(val)=>setOrderId(val.toUpperCase())}/>
  </View>
  <TouchableOpacity style={styles.button} onPress={handleSearch}>
            <Text style={{ color: 'white', fontSize: 12 }}>Search Package</Text>
          </TouchableOpacity>
</View>



      </View>


    {
searchdata?.data &&   <View style={styles.card} >
<View>
<Image source={require('../../assets/images/bike.png')}/>
</View>

<View style={{flex:1}}>
<View>
  <Text style={{fontWeight:'bold'}}>{searchdata?.data?.orderId}</Text>
<Text>To: {searchdata?.data?.receiverName}</Text>
<Text>{searchdata?.data?.senderAddress}</Text>
<Text>{searchdata?.data?.receiverAddress}</Text>
<Text style={{color:'#1680E4'}}>{searchdata?.data?.pickupTime}</Text>
</View>
</View>


<View>
<View style={{backgroundColor: searchdata?.data?.status === 'Order Received' ? '#00A89C14' : searchdata?.data?.status === 'Order Picked Up' ? '#1680E414': searchdata?.data?.status === 'Cancelled' ? '#CE112614' : '#FCD1161A', paddingHorizontal:7,paddingVertical:5,borderRadius:8}}>
        <Text style={{color:searchdata?.data?.status === 'Order Received' ? '#00A89C' : searchdata?.data?.status === 'Order Picked Up' ? '#1680E4': searchdata?.data?.status === 'Cancelled' ? '#CE1126' : '#EEC200'}}>{searchdata?.data?.status}</Text>
      </View>
  <View style={{flexDirection:'row',justifyContent:'center' ,alignItems:'center'}}>
    <Text>  {searchdata?.data?.deliveryTime}</Text>
  </View>
</View>

</View>
    }

    {searchdata?.responseCode =='005' && <View style={{padding:5,justifyContent:'center',alignItems:'center'}}>
      <Text>{searchdata.responseDesc}</Text>
      </View>}
{orderId==='' && <View style={{padding:5,justifyContent:'center',alignItems:'center'}}>
  <Text>{error}</Text>
  </View>}



      <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center', padding: 10,marginTop:20 }}>
      <Text style={{fontSize:16,fontWeight:'700'}}>Latest Orders</Text>
      <Text style={{color:'#4CA7A8',fontWeight:'600'}}>See All</Text>
      </View>

      <ScrollView style={styles.latestContainer}>
        <Latest />
      </ScrollView>
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4
  },card:{
    flexDirection:'row',
    alignItems:'center',
    gap:7,
    padding:15,
    marginVertical:2,
 backgroundColor:'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
 
    borderRadius:8,
    elevation:0.5
},
  header: {
    padding: 20,
    marginTop:20
  },
  textView: {
    backgroundColor: '#4CA7A8',
    paddingHorizontal: 15,
    paddingVertical: 25,
    borderRadius: 12,
  },
  text1: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  text2: {
    color: 'white',
    opacity: 0.7,
    fontSize: 12,
    paddingVertical: 7,
    marginBottom: 10
  },
  input: {
    padding: 5,
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5
  },
  field: {
    flexDirection: 'row',
    gap: 4
  },
  button: {
    backgroundColor: '#00635C',
    borderRadius: 8,
    paddingHorizontal:8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  latestContainer: {
    flex: 1
  }
});
