
const Header = () => {
    let customCss = "code"
    let isLoggin = true
    let greet = isLoggin? <p>Login</p> : <p>Please Log in</p>
    let List = ["list1","list2","list3","list4"]
  return (
<>
<div>
    <h1 className="bannerText">Ramesh</h1>
    <p className="slogon">learn more be smart</p>
    {/* javascript expression */}
    <p className={customCss} style={{fontSize:"20px", fontStyle:"italic"}}>25+35={25+35}</p>

    {/* jsx with conditionla rendering */}

    {greet}

    {/* jsx with list */}

    <ul>
        {List.map((lis,index) => (
            <li key={index}>{lis}</li>
        ))}
    </ul>

</div>
</>  
)
}

export default Header
