import { View, Text, StyleSheet, ScrollView, FlatList, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Card } from './components/Card/Card';
import { mockData } from '../model/mock';
import { Filter } from './components/Filter/Filter';
import { OrderSheet } from '@/widgets/OrderSheet/ui/OrderSheet';

const Catalog = () => {
  const [numColumns, setNumColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const { width } = Dimensions.get('window');
      if (width < 600) {
        setNumColumns(2);
      } else {
        setNumColumns(3);
      }
    };

    const subscription = Dimensions.addEventListener('change', handleResize);
    handleResize();

    return () => subscription?.remove();
  }, []);
  return (
    <>
      <Filter />
      <FlatList
        data={mockData}
        renderItem={({ item }) => <Card {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        key={numColumns}
        style={{
          width: '100%',
          height: '100%',
        }}
        contentContainerStyle={styles.container}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});
export default Catalog;
