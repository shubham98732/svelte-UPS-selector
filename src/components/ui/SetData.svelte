<script lang="ts">
    export let time = "00";
    export let name1="shubham"

    let text=document.getElementById("quantity")

</script>
<main>
    <div class="input-box">
      
    <input class="container" type="number" id="quantity" name="quantity" min="00" max="99" placeholder=00 step="1">
    <span class="unit">h</span>
    <input class="container" type="number" id="quantity1" name="quantity" min="00" max="99" placeholder=00 step="1">
    <span class="unitMinute">m</span>
</div>
</main>

<style>

.container{
    width:12%;
    height: 30px;
    border-color: transparent;
}

    .input-box { 
  position: relative; 
  display: flex;
  flex-direction: row;
 
  
}

input { 
  display: block; 
  border: 1px solid #d7d6d6; 
  background: #fff; 
  padding: 10px 10px 10px 20px; 
  width: 195px; 
}

.unit { 
  position: absolute; 
  display: block; 
  left: 40px; 
  top: 8px; 
  z-index: 9; 
}

.unitMinute { 
  position: absolute; 
  display: block; 
  left: 122px; 
  top: 8px; 
  z-index: 9; 
}
</style>