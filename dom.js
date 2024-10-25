document.getElementById('Apply-button').addEventListener('click', function(){
    const paymony=document.getElementById('input-fild');
    const paymonyvalues=paymony.value;
    const paymonyvaluesmakenumber=parseFloat(paymonyvalues);

    const price=document.getElementById('price-camera');
    const priceinner=price.innerText;
    const paymonyinnermakeNumber=parseFloat(priceinner);

    const payplease=document.getElementById('pay-many');
    const paymonyinner=payplease.innerText; 
    const  minas=paymonyvaluesmakenumber*10;
    const paymonyinnermakeNumbersumpaymonyvaluesmakenumber=paymonyinnermakeNumber-minas;
    payplease.innerText=paymonyinnermakeNumbersumpaymonyvaluesmakenumber;
})