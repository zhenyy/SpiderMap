<script>
/**
 * Stores all static information as global objects here
 * spiderType is an object with a structure {spider name 1: {url: url of icon image, poisonLvl: poisonousness level}, ...}
 */
const spiderType = {
  'Funnel-Web Spider': {url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png', poisonLvl: 'Deadly & Dangerous'},
  'Garden Orb Weaver Spider': {url: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png', poisonLvl: 'Low Risk'},
  'Redback Spider': {url: 'https://maps.google.com/mapfiles/ms/icons/pink-dot.png', poisonLvl: 'Deadly & Dangerous'},
  'Tarantula Spider': {url: 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png', poisonLvl: 'Toxic & Painful Bite'},
  'White-Tailed Spider': {url: 'https://maps.google.com/mapfiles/ms/icons/purple-dot.png', poisonLvl: 'Deadly & Dangerous'},
  'Daddy Long Legs Spider': {url: 'https://maps.google.com/mapfiles/ms/icons/ltblue-dot.png', poisonLvl: 'Low Risk'},
  'Huntsman Spider': {url: 'https://maps.google.com/mapfiles/ms/icons/orange-dot.png', poisonLvl: 'Low Risk'},
  'Red-Headed Mouse Spider': {url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png', poisonLvl: 'Toxic & Painful Bite'},
  'St Andrews Cross Spider': {url: 'https://firebasestorage.googleapis.com/v0/b/spider-location-storage-center.appspot.com/o/brown.png?alt=media&token=fd967824-dfce-468c-85a7-9f031e9c84d6', poisonLvl: 'Low Risk'}
}

export default {
  spiderType
}
</script>
