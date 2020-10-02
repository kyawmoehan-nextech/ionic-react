import React from "react";
import { IonRow, IonCol, IonItem, IonLabel, IonInput } from "@ionic/react";
const BmiControl = ({ height, weight, setHeight, setWeight }) => {
  return (
    <>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Your Height</IonLabel>
            <IonInput
              type="number"
              onIonInput={(e) => setHeight(e.target.value)}
              value={height}
            ></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Your Weight</IonLabel>
            <IonInput
              type="number"
              onIonInput={(e) => setWeight(e.target.value)}
              value={weight}
            ></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
    </>
  );
};

export default BmiControl;
