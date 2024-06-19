import { View, Text, StyleSheet, Image } from 'react-native';

export default function PopularJobCard({ job }) {
  return (
    <View style={styles.card}>

      <View style={styles.leftPart}>
        <Image source={job.icon} style={styles.cardIcon}/>
        <View>
          <Text style={styles.title}>{job.title}</Text>
          <Text style={styles.company}>{job.company}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.salary}>{job.salary}</Text>
        <Text style={styles.location}>{job.location}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 74,
    width: 319,
    borderRadius: 15,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  leftPart: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardIcon: {
    marginRight: 15
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 13,
    color: 'gray',
  },
  salary: {
    fontSize: 12,
  },
  location: {
    fontSize: 13,
    color: 'gray',
  },
});
