import { StyleSheet, Text, View, Image} from 'react-native';
import React,{useEffect, useState} from 'react';
import { useData } from '@/DataContext';

interface Order {
  orderId: string;
  custId: string;
  senderName: string;
  senderAddress: string;
  senderPhoneNumber: string;
  senderZoneName: string;
  receiverzoneName: string;
  receiverName: string;
  receiverAddress: string;
  receiverPhoneNumber: string;
  packageTypeDesc: string;
  pickupTime: string;
  deliveryTime: string;
  paymentStatus: boolean;
  status: string;
  totalAmount: number;
}

interface ApiResponse {
  responseCode: string;
  responseDesc: string;
  data: Order[];
  pageSize: number;
  currentPage: number;
  totalPages: number;
}



const Latest = () => {

  const {data}=useData()
  const [searchData, setSearchData] = useState<ApiResponse | null>(null);
  const [error,setError]=useState('')
  useEffect(() => {
    const fetchData = async () => {
      if (data?.accessToken) { // Fetch data only if accessToken is present
        try {
          const response = await fetch('https://coding.zippy.com.gh/api/get_orders', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${data.accessToken}`
            }
          });
    
          if (response.ok) {
            const result = await response.json();
            setSearchData(result);
        
          } else {
            // Handle error response
            console.error('Failed to fetch data for Latest:', response.statusText);
          }
        } catch (error) {
          // Handle network or other errors
          console.error('Error fetching data:', error);
        }
      }
    };
    
    fetchData(); // Call the async function immediately
  }, [data]); // Empty dependency array means this effect runs only once on mount
  



  return (
    <View style={{ flex: 1,backgroundColor:'#F4F4F4' }}>
     
     
        {/* Your long content goes here */}

        {searchData?.data?.map((info,index)=>(

<View style={styles.card} key={index}>
<View>
<Image source={require('../assets/images/bike.png')}/>
</View>

<View style={{flex:1}}>
<View>
<Text>To: {info.receiverName}</Text>
<Text>{info.senderAddress}</Text>
<Text>{info.receiverAddress}</Text>
<Text style={{color:'#1680E4'}}>{info.pickupTime}</Text>
</View>
</View>


<View>
<View style={{backgroundColor: info.status === 'Order Received' ? '#00A89C14' : info.status === 'Order Picked Up' ? '#1680E414': info.status === 'Cancelled' ? '#CE112614' : '#FCD1161A', paddingHorizontal:7,paddingVertical:5,borderRadius:8}}>
        <Text style={{color:info.status === 'Order Received' ? '#00A89C' : info.status === 'Order Picked Up' ? '#1680E4': info.status === 'Cancelled' ? '#CE1126' : '#EEC200'}}>{info.status}</Text>
      </View>
  <View style={{flexDirection:'row',justifyContent:'center' ,alignItems:'center'}}>
    <Text>  {info.deliveryTime}</Text>
  </View>
</View>

</View>
        ))}
     
    
    
    </View>
  );
};

export default Latest;

const styles = StyleSheet.create({
    card:{
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
    }
});
