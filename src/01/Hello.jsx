import CurrentTime from "./CurrentTime";

function Hello() {
    let name = '최승하' ;
    return (
        // <div className="text-4xl font-bold bg-blue-300" style={{color:"blue"}}>
        <>
        <div className="text-4xl font-bold bg-yellow-500 text-black">    
            Hello React! {`${name}님 안녕하세요.`}
        </div>
        <CurrentTime />
        </>
    )
}

export default Hello ;