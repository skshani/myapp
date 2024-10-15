

function ButtonT() {
    let counter = 1;

    const add = () => {
   const setCounter = counter+1;
   console.log(setCounter);
   

    }
    return (
        <>
            <h2>Counter Value :{counter}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea maiores illum dolorem provident a quos deserunt blanditiis temporibus obcaecati nulla tempore cum accusamus nihil nisi voluptate, illo cupiditate, autem odit?</p>
            <button onClick={add()}>Add Value</button>
            <button onClick={add()}>sum</button>
            <button onClick={add()}>sum</button>
            <button onClick={add()}>sum</button>
            <button onClick={add()}>sum</button>

        </>
    )
}
export default ButtonT
