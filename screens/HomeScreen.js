import { View, Text, FlatList, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeaturedJobCard from '../components/FeaturedJobCard';
import PopularJobCard from '../components/PopularJobCard';

const featuredJobs = [
  { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$180,000/y', location: 'Accra, Ghana', icon: require('../icons/facebook-sm.png'), backgroundColor: '#1A73E8' },
  { id: '2', title: 'Product Manager', company: 'Google', salary: '$160,000/y', location: 'London, UK', icon: require('../icons/google-sm.png'), backgroundColor: '#040730' },
  { id: '3', title: 'Machine Learning Engineer', company: 'Tesla', salary: '$100,000/y', location: 'Palo Alto, US', icon: require('../icons/beats-by-dre.png'), backgroundColor: 'rgb(230, 0, 0)' },
  { id: '4', title: 'Data Scientist', company: 'Amazon', salary: '$150,000/y', location: 'Seattle, US', icon: require('../icons/google-sm.png'), backgroundColor: 'rgb(210, 210, 210)' },
  { id: '5', title: 'DevOps Engineer', company: 'Microsoft', salary: '$130,000/y', location: 'Redmond, US', icon: require('../icons/burger-king.png'), backgroundColor: 'rgb(127, 186, 0)' },
  { id: '6', title: 'UI/UX Designer', company: 'Apple', salary: '$140,000/y', location: 'San Francisco, US', icon: require('../icons/apple.png'), backgroundColor: 'rgb(163, 170, 174)' },
  { id: '7', title: 'Frontend Developer', company: 'Netflix', salary: '$120,000/y', location: 'Los Gatos, US', icon: require('../icons/burger-king.png'), backgroundColor: 'rgb(10, 0, 0)' },
  { id: '8', title: 'Backend Developer', company: 'Spotify', salary: '$110,000/y', location: 'Stockholm, Sweden', icon: require('../icons/google-sm.png'), backgroundColor: 'rgb(30, 215, 96)' }
];

const popularJobs = [
  { id: '1', title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', icon: require('../icons/burger-king.png') },
  { id: '2', title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US', icon: require('../icons/beats-by-dre.png') },
  { id: '3', title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', icon: require('../icons/facebook.png') },
  { id: '4', title: 'Marketing Specialist', company: 'Coca Cola', salary: '$92,000/y', location: 'Atlanta, US', icon: require('../icons/apple.png') },
  { id: '5', title: 'Sales Representative', company: 'PepsiCo', salary: '$88,000/y', location: 'New York, US', icon: require('../icons/beats-by-dre.png') },
  { id: '6', title: 'Customer Support', company: 'Airbnb', salary: '$82,000/y', location: 'Dublin, Ireland', icon: require('../icons/burger-king.png') },
  { id: '7', title: 'Business Analyst', company: 'Uber', salary: '$90,000/y', location: 'San Francisco, US', icon: require('../icons/facebook.png') },
  { id: '8', title: 'HR Manager', company: 'LinkedIn', salary: '$94,000/y', location: 'Sunnyvale, US', icon: require('../icons/apple.png') }
];

export default function HomeScreen({ route }) {
  const { name, email } = route.params;

  return (
    <SafeAreaView style={styles.wrapper}>
        <FlatList
          ListHeaderComponent={() => (
            <>
              <View style={styles.headerContainer}>
                <View>
                  <Text style={styles.header}>{name}</Text>
                  <Text style={styles.email}>{email}</Text>
                </View>
                <Image source={require('../images/profile.png')} style={styles.profileImage} />
              </View>
              <View style={styles.searchFilterWrapper}>
                <View style={styles.searchContainer}>
                  <Image source={require('../icons/search.png')} style={styles.searchIcon} />
                  <TextInput
                    style={styles.searchInput}
                    placeholder="Search a job or position"
                    placeholderTextColor="#BDBDBD"
                  />
                </View>
                <TouchableOpacity style={styles.filterButton}>
                  <Image source={require('../icons/filter.png')} style={styles.filterIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Featured Jobs</Text>
                <TouchableOpacity><Text style={styles.seeAllText}>See all</Text></TouchableOpacity>
              </View>
              <FlatList
                data={featuredJobs}
                renderItem={({ item }) => <FeaturedJobCard job={item} />}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.featuredJobsList}
              />
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Popular Jobs</Text>
                <TouchableOpacity><Text style={styles.seeAllText}>See all</Text></TouchableOpacity>
              </View>
            </>
          )}
          data={popularJobs}
          renderItem={({ item }) => <PopularJobCard job={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.popularJobsList}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAFAFD'
  },
  container: {
    flex: 1,
    
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  email: {
    fontSize: 16,
    color: 'gray'
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  searchFilterWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  searchIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 10,
    top: 15,
    zIndex: 1
  },
  searchContainer: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    borderRadius: 13,
    padding: 10,
    position: 'relative'
  },
  searchInput: {
    flex: 1,
    height: 30,
    backgroundColor: '#E0E0E0',
    borderRadius: 1,
    paddingLeft: 25,
    paddingHorizontal: 10
  },
  filterButton: {
    height: 49,
    padding: 12.5,
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
    marginLeft: 14
  },
  filterIcon: {
    width: 25,
    height: 25
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  seeAllText: {
    fontSize: 14,
    color: 'gray'
  },
  featuredJobsList: {
    marginBottom: 20
  },
  popularJobsList: {
    paddingBottom: 20
  }
});
