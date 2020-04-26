import React, {useState, useEffect} from 'react'
import {SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native'

import api from './services/api';

export default function App(){

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data)
      setProjects(response.data)
    });
  }, [])

  async function handleAddProject(){
    const response = await api.post('projects', {
      title: `New Project ${Date.now()}`,
      owner: 'Leonam'
    });

    setProjects([...projects, response.data]);
  }


  return(
    <>
    <StatusBar barStyle="light-content"/>
    <SafeAreaView style={styles.container}>
      <FlatList       
        data={projects}
        keyExtractor={project => project.id}
        renderItem={({item: project})=>(
          <Text style={styles.title}>
            {project.title}
          </Text>
          )
        }
      />
      <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={handleAddProject}>
        <Text style={styles.buttonText}>Add Projects</Text>
      </TouchableOpacity>
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },
  title:{
    color:'#FFF',
    fontSize: 28,
    fontWeight: 'bold',    
  },
  button: {    
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
})