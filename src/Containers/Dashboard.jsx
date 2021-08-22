import React, { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Card from "../components/DashBoardCard";
import { AuthContext } from "../Auth";
import firebase from "firebase";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (currentUser) {
      const db = firebase.firestore();
      try {
        db.collection("users")
          .doc(currentUser.email)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setIsAdmin(doc.data().adminUser);
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          });
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return (
    <Container>
      <Row className="px-1 p-lg-4 mt-5">
        <Card
          to="/neonatalcare"
          title="Cuidado neonatal"
          description="Mira los cuidados especiales que debes tener con tu recién
                nacido y la información más relevante que debes saber sobre
                ellos."
        />
        <Card
          to="/neonatallist"
          title="Acerca de mi neonato"
          description="Mira la información básica más reciente de tu neonato"
        />
        <Card
          to="/neonatalview"
          title="Ver mi neonato"
          description="Mira a tu neonato en vivo desde la incubadora!"
        />
        <Card
          to="/frequentquestions"
          title="Preguntas frecuentes"
          description="Resuelve tus dudas apoyándote en las preguntas más comunes que
                tienen los padres de recién nacidos."
        />
        <Card
          to="/contactpediatrician"
          title="Contactar pediatra"
          description="Realiza una consulta médica con el pediatra encargado por medio
                de una videollamada"
        />
        <Card
          to="/profile"
          title="Mi cuenta"
          description="Mira información relacionada con tu perfil"
        />

        {currentUser && isAdmin ? (
          <>
            {/* <Card
               to="/"
               title="Gestión de usuarios"
               description="Administración de los usuarios"
             /> */}

            <Card
              to="/neonatemanagement"
              title="Administración de neonatos"
              description="Agregar, eliminar o editar un nuevo neonato al sistema"
            />
          </>
        ) : (
          <></>
        )}
      </Row>
    </Container>
  );
};

export default Dashboard;
