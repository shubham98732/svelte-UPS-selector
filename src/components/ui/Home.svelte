<script lang="ts">
    import App from '../../App.svelte';
    import {user} from '../../store/Store';
    import Radio from './RadioComp.svelte';
    import SetData from './SetData.svelte';

    // console.log(name1)
   
    let lowerNumber=16000;
    let radioValue;
    let operatingVoltage;

	
	const loadData = [{
		value: 1,
		label: 'Watts',
	}, {
		value: 0.6,
		label: 'VA',
	}, {
		value: 600,
		label: 'kVA',
	}]

	
	const voltageData = [{
		value: 120,
		label: '120 V',
	}, {
		value: 208,
		label: '208 V',
	}, {
		value: 240,
		label: '240 V',
	}]

    function handleSubmit(event){
        event.preventDefault();
    }

    let load;
    user.subscribe((data)=>{load=data})

</script>

<main>
    <div class="container-1">
    <h1 class="header">Server Room and Network Closet</h1>
    <h3 class="sub-header">Enter your requirements</h3>
    <h5 class="child-header">User Site Voltage</h5>
    <p class="paragraph">120V (& 208V, 480V) based on your current country selection. To update user site voltage, please <a href="www.google.com" target="_blank">change your country.</a></p>
   <br>

    <form on:submit={handleSubmit}>
       
        <div class="radio-button-header">
           
        
<Radio options={loadData} fontSize={16} legend='Total Load' bind:userSelected={radioValue}/>


   

    <div class="radio-button-operating">
      
<Radio options={voltageData} fontSize={16} flex={"column"} legend='Operating Voltages' bind:userSelected={operatingVoltage}/>

    </div>
</div>

<hr class="line">



<h5 class="child-header">Run Time</h5>
<SetData/>



    <!-- <input type="text" bind:value={$user.name}> -->
    <input type="submit" class="button"/>
      </form>
    

      <p>
        {JSON.stringify($user, 0, 2)}</p>
</div>

<div class="container-2">
    <h3>Configuration by Load</h3>
    <!-- <div class="container2-content"> -->
<h6 class="child-header">Total Load:<p class="paragraph">{radioValue}/{lowerNumber} Watts</p></h6>



<!-- </div> -->
<h6 class="child-header">Operating Voltage: {operatingVoltage} V</h6>
<h6 class="child-header">Run Time:{(load.operating_voltage.first)? 120:(load.operating_voltage.second)?208:240} V</h6>
<h6 class="child-header">Power Expansion:</h6>
</div>

</main>

<style lang="scss">

    main{
        display: flex;
        border: 1px solid transparent;
        box-shadow: 0 1px 4px 1px rgba(101, 103, 111, 0.6);
        border-radius: 3px;
        width:75vw;
        height:90vh;
        background-color: white;   
        overflow: hidden;
    }

    .container-1{
        width:75%;
        padding: 20px;
        line-height: 0.9;
    }

   .header{ 
    color:rgb(72, 218, 72);
    font-size:xx-large;
    font-weight: 400;
   }

   .sub-header{
    color:rgb(67, 65, 65);
    font-size:x-large;
    font-weight: 400;
   }

   h5:hover{
    background-color: red;
   }

   .paragraph{
    color:black;
    font-size: small;
    font-weight: 400;
    line-height: 1.2;
   }

   .radio-button-header{
    display: flex;
    justify-content: space-between;
   }

   .radio-button-operating{
    display: flex;
    flex-direction: column;
    align-content: center;
    padding-right: 180px;
   }

   .line{
    border: 0.8px solid rgb(209, 206, 206);
    background-color:rgb(209, 206, 206)
   }

    input[type=radio] {
    border: 0px;
    width:16px;
    height: 16px;
}

   .container-2{
    display: flex;
    flex-direction: column;
    border-left: 2px solid rgb(209, 206, 206);
    width:22%;
    padding: 15px;

   }

   h3{ 
    color:rgb(148, 149, 148);
    font-size:small;
    font-weight: 600;
   }



   .button{
    background-color: rgb(39, 79, 235);
    color: white;
    width:100px
   }

   .button:hover{
    background-color: rgb(68, 101, 235);
    cursor:pointer;
   }

   .container2-content{
    /* display: flex;
    justify-content: flex-start; */
    /* line-height: 2; */

   }

   




</style>