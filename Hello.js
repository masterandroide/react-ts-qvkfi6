const Hello = (props) => {
  return (
    <div>
      Hello {props.name}, you are {props.age} years old
    </div>
  );
};

export const App = () => {
  const name = 'Peter';
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>  
      <Hello name="Maya" age={ 26 + 10} />
      <Hello name={name} age={ age } />

    </div>
  )
}