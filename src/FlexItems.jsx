import './FlexItems.css'
const FlexItems = () => {
    return(
        <>
        <h1>Flex Container</h1>
        <p>Four Flex Items contained in a Flex Container</p>
            {/* <div class="flex-container">
            <div style={{backgroundCcolor: 'Orange'}}>Box 1 </div>
            <div style={{backgroundColor: 'blue'}}>Box 2    </div>
            <div style={{backgroundColor: 'yellow'}}>Box 3  </div>
            <div style={{backgroundColor: 'red'}}>Box 4 </div>
            <div style={{backgroundColor: 'green'}}>Box 5</div>     
        </div> */}
        <header style={{backgroundColor:"orangered",padding:'20px'}}>
            <div style={{paddingLeft:'100px',paddingRight:'100px',display:'flex',justifyContent:'space-between',color:'white',fontSize:'.8125rem'}}>
                <div>Seller Center | Mulai Berjualan</div>
                <div>Daftar Login</div>
            </div>
        </header>
        </>
    );
}
export default FlexItems
