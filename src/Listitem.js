const Listitem = ({ item }) => {
  return <li key={item.id}>{JSON.stringify(item)}</li>;
};

export default Listitem;
