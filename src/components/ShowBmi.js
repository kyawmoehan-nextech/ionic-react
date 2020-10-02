import React from "react";
import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react";

const ShowBmi = ({ bmi }) => {
  return (
    <IonRow className="ion-margin-top">
      <IonCol>
        <IonCard>
          <IonCardContent className="ion-text-center">
            <h2>Your Body-Mass-Index</h2>
            <h3>{bmi.toFixed(2)}</h3>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default ShowBmi;
