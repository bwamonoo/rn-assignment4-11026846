import { View, Text, StyleSheet, Image } from 'react-native';

export default function FeaturedJobCard({ job }) {

  const { backgroundColor } = job;

  return (
    <View style={[ styles.card, {backgroundColor} ]}>

      <View style={styles.upperCard}>
        <View style={styles.iconContainer}>
          <Image source={ job.icon } style={styles.cardIcon} />
        </View>  
        <View style={styles.upperText}>
          <Text style={styles.title}>{job.title}</Text>
          <Text style={styles.company}>{job.company}</Text>
        </View>
      </View>

      <View style={styles.lowerCard}>
        <Text style={styles.salary}>{job.salary}</Text>
        <Text style={styles.location}>{job.location}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: 186,
    width: 280,
    borderRadius: 20,
    padding: 20,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  upperCard: {
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: 'white',
    width: 46,
    height: 46,
    marginRight: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardIcon: {
    width: 22,
    height: 23.57
  },
  lowerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 14,
    color: 'white',
  },
  salary: {
    fontSize: 15,
    color: 'white',
  },
  location: {
    fontSize: 14,
    color: 'white',
  },
});
