import React, { useState } from "react";
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonAlert,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import ShowBmi from "./components/ShowBmi";
import Buttons from "./components/Buttons";
import BmiControl from "./components/BmiControl";

const App = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState();
  const calculateBMI = () => {
    if (!weight || !height || +weight <= 0 || +height <= 0) {
      setShowAlert(true);
      return;
    }
    const bmiResult = +weight / (+height * +height);
    setBmi(bmiResult);
  };
  const resetInputs = () => {
    setHeight("");
    setWeight("");
    setBmi("");
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <BmiControl
            height={height}
            setHeight={setHeight}
            weight={weight}
            setWeight={setWeight}
          />
          <Buttons calculateBMI={calculateBMI} resetInputs={resetInputs} />
          {bmi && <ShowBmi bmi={bmi} />}
        </IonGrid>
      </IonContent>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        cssClass="my-custom-class"
        header={"Alert"}
        subHeader={"Invalid"}
        message={"Please Enter valid (no-negative) Number!"}
        buttons={["OK"]}
      />
    </IonApp>
  );
};

export default App;
