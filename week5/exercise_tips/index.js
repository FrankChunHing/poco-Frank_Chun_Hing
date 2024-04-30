class TipsClass {
    constructor(total, percent){
        this.total = total;
        this.percent = percent;
    }
    tipCalculate(){
        return this.total * this.percent / 100
    }
}

function calculateTips(e){
    e.preventDefault();
    console.log("start")
    const total = parseFloat(document.getElementById('total').value);
    const percent = parseFloat(document.getElementById('percent').value);

    let inputInfo = new TipsClass(total, percent)
    document.getElementById("result").textContent = inputInfo.tipCalculate()
}



document.getElementById('tips').addEventListener('submit', calculateTips)

