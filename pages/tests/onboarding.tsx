import { PickYourPlanet } from "../../components/Gameplay/Chapter 1/onboarding";
import Layout from "../../components/_Core/Section/Layout";

export default function OnboardingTest() {

    return (
        <>
            <style jsx global>
          {`
            body {
              background: url('/') center/cover;
              background-attachment: fixed;
            }

            @media only screen and (max-width: 767px) {
              .planet-heading {
                color: white;
                font-size: 24px;
                text-align: center;
                margin-bottom: 10px;
              }
            }
          `}
        </style>
            <PickYourPlanet />
        </>
    );
};