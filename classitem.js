
class things{
	static ctr =0;
  constructor() {
    this.x = Math.floor(Math.random() * 1900) + 1;
    this.y = 0;
	this.type = Math.floor(Math.random() * 3) + 1;
	things.ctr++
	this.id = 'things'+things.ctr
	
	if (this.type == 1) {
		this.img = "<img src ='gold_apple.png' width ='50px'/>"
	}else if (this.type == 2){
		this.img  = "<img src ='green_apple.jpg' width ='70px'/>"
	}else{
		this.img = "<img src ='bomb.jpg' width ='80px'/>"
	}
	
	this.gambarkntanah ='broken.png'
	
	}
  
  
  

  methodturun() {
	
	this.y +=10
	
   
  }


}
