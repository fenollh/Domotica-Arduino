int rele = 2;
int button = 3; 
int foto = A0;

float fotoVal;

int buttonState = 0;
int buttonPrevState = 0;

int bluetoothState = 0;
int globalState = 0;
boolean mode[] = {true, false, false}; //1: modo interruptor, 2: modo bluetooth, 3: modo luz


void setup(){
  Serial.begin(9600);
  pinMode(rele, OUTPUT);
  pinMode(button, INPUT);

}


void loop(){
  
  if(Serial.available()>0){
    bluetoothState = Serial.read();
    if(bluetoothState == 1) globalState = 1;
    else globalState = 0;
  }
  
  buttonState = digitalRead(button);
  if(buttonPrevState != buttonState){
    mode[0] = true;
    mode[1] = false;
    mode[2] = false;
    buttonPrevState = buttonState;
    globalState = buttonState;
  }
  
  if(globalState == 1) digitalWrite(rele, HIGH);
  else digitalWrite(rele, LOW);
  
}
