import React from "react";
import { Accordion, Card, Table } from "react-bootstrap";
import pos1 from "../images/positions/pos1.png";
import pos2 from "../images/positions/pos2.png";
import pos3 from "../images/positions/pos3.png";
import pos4 from "../images/positions/pos4.png";

const Acordion = () => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h5>Baño del bebé</h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>
                👶🏼 Alistar todo lo que se necesite para el baño del bebé
                (toalla, esponja, jabón o champú, ropa, pañal) calentando la
                ropa en el seno de la madre.
                <br />
                👶🏼 Evitar corrientes de aire.
                <br />
                👶🏼 Asegurarse que el agua esté templada, ni demasiado fría, ni
                demasiado caliente. Evitar agregar sustancias diferentes.
                <br />
                👶🏼 Iniciar el baño, por la cara, continuar por la cabeza, luego
                cuerpo y por último los genitales.
                <br />
                👶🏼 Secar rápidamente al bebé y vestirlo rápidamente
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h5>Cuidados con el ombligo</h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>
                👶🏼 Mantenerlo limpio y seco. Retirar residuos de agua y jabón
                después del baño.
                <br />
                👶🏼 Aplicar alcohol tres veces al día en la parte donde el
                ombligo se pega a la piel.
                <br />
                👶🏼 Si se hunta de orina o popó, lavarlo con abundante agua y
                jabón, secarlo y aplicar alcohol.
                <br />
                👶🏼 Doblar el pañal por debajo del ombligo, para mantenerlo seco
                y facilitar su desprendimiento.
                <br />
                👶🏼 El ombligo se caerá generalmente después de 7 a 10 días
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            <h5>Vestido y cambio del pañal</h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <p>
                👶🏼 Colocar ropa ancha y cómoda, de material suave y
                preferiblemente de algodón.
                <br />
                👶🏼 Evitar lastimarle los dedos al vestirlo.
                <br />
                👶🏼 Lavar ropa con jabón neutro, separada de la ropa familiar.
                <br />
                👶🏼 Cambiar el pañal regularmente.
                <br />
                👶🏼 Lavar con agua tibia las nalgas, entre piernas y debajo de
                los testículos. Si es niño retraer suavemente la piel que cubre
                el pene y en la niña limpiar de adelante hacia atrás separando
                los labios, para evitar las infecciones. Secar bien con toques
                suaves.
                <br />
                👶🏼 Si necesita cremas protectoras para evitar las quemaduras por
                orina, en las niñas no untar al interior de los genitales.
                <br />
                👶🏼 No coloque en la piel aceites, talcos o sustancias.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            <h5>Cuidados con la piel</h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <p>
                👶🏼 La piel del niño es muy delicada, y tiene al nacer una grasa
                blanca, que no debe retirar, pues se cae sola. En ocasiones el
                bebé puede presentar un brote pequeño y de color rojo en la piel
                que desaparecerá solo. Pero si este tiene pus o materia, debe
                consultar al médico.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            <h5>Exposición al sol</h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <p>
                👶🏼 A partir del segundo día de vida del bebé, presenta una
                coloración amarilla pálida en la piel; para disminuirla
                colocarlo a la luz del día mañana y tarde a través del vidrio de
                una ventana, sin corrientes de aire, durante 10 a 15 minutos,
                completamente desnudo cubriendo los ojos y genitales. Acompáñelo
                siempre.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="5">
            <h5>Ambiente y sueño</h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <p>
                👶🏼 Acostarlo boca arriba, la cabeza elevada 30 grados, sin
                almohadas al rededor, en una cuna, con soporte en los pies para
                evitar resbalarse bajo las cobijas y ahogarse, en la misma
                habitación con sus padres.
                <br />
                👶🏼 No fumar en la habitación del bebé.
                <br />
                👶🏼 No colocarlo en el pecho de los padres cansados o bajo
                efectos del alcohol y/o drogas.
                <br />
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="6">
            <h5>Vacunación</h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              👶🏼 Vacunas:
              <Table striped bordered hover size="sm" resposive="xs">
                <thead>
                  <tr>
                    <th>Nombre de la vacuna</th>
                    <th>Enfermedad que previene</th>
                    <th>Edad para colocar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>BCG</td>
                    <td>Tuberculosis</td>
                    <td>Recién nacido</td>
                  </tr>
                  <tr>
                    <td>Hepatitis B</td>
                    <td>Hepatitis B</td>
                    <td>Recién nacido</td>
                  </tr>
                  <tr>
                    <td>Polio</td>
                    <td>Poliomielitis</td>
                    <td>Recién nacido</td>
                  </tr>
                </tbody>
              </Table>
              <h5>Para tener en cuenta...</h5>
              <p>
                👶🏼 Acudir a la cita de control, donde le indicarán el esquema de
                vacunación que continúa a partir de los dos meses de vida
                <br />
                👶🏼 Vigilar el sitio de aplicación de las vacunas, para
                identificar signos de infección
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="7">
            <h5>Lactancia materna</h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="7">
            <Card.Body>
              <p>
                La leche materna es el alimento ideal y exclusivo durante los
                primeros 6 meses de vida del bebé, ya que ayuda:
              </p>
              <h5>Al bebé...</h5>
              <p>
                👶🏼 Es la primera vacuna porque trasmite defensas.
                <br />
                👶🏼 Aporta nutrientes y lo protege de infecciones del instestino
                y pulmones.
                <br />
                👶🏼 Favorece la maduración del cerebro y el desarrollo de la
                inteligencia.
                <br />
                👶🏼 Favorece el vínculo entre padres e hijo.
                <br />
              </p>
              <h5>A la mamá...</h5>
              <p>
                👶🏼 Es económica, sin bacterias y está a temperatura ideal.
                <br />
                👶🏼 Ayuda a la recuperación del tamaño de la matriz.
                <br />
                👶🏼 Disminuye el riesgo de sangrado.
                <br />
                👶🏼 Favorece la pérdida de peso.
                <br />
                👶🏼 Disminuye la aparición de cáncer de seno y ovario.
                <br />
                👶🏼 Produce sentimientos de bienestar.
                <br />
                👶🏼 Evita hincazón y dolor de los senos.
                <br />
              </p>
              <h5>Técnicas de amamantamiento...</h5>
              <p>
                👶🏼 Lavarse las manos.
                <br />
                👶🏼 Despertarlo para comer.
                <br />
                👶🏼 Posición cómoda para la madre y el bebé.
                <br />
                👶🏼 Ofrecer el seno al bebé introduciendo el pezón y la mitad de
                la zona oscura.
                <br />
                👶🏼 Dejarlo tomar hasta que desocupe el seno.
                <br />
                👶🏼 No retirar bruscamente el seno.
                <br />
                👶🏼 Sacarle gases evitando movimientos bruscos.
                <br />
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="8">
            <h5>Posiciones de amamantamiento</h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="8">
            <Card.Body>
              <p>👶🏼 Postura sentada posición "de cuna" (vientre con vientre)</p>
              <img src={pos1} alt="position 1" />
              <br />
              <small className="text-muted">
                Imagen tomada de folleto cuidado en el postparto a la madre y el
                recién nacido. Grupo académico perinatal UNAL
              </small>
              <p>
                👶🏼 Postura sentada posición "de cuna" cruzada (vientre con
                vientre)
              </p>
              <img src={pos2} alt="position 2" />
              <br />
              <small className="text-muted">
                Imagen tomada de folleto cuidado en el postparto a la madre y el
                recién nacido. Grupo académico perinatal UNAL
              </small>
              <p>👶🏼 Postura sentada posición "de rugby" (fútbol americano)</p>
              <img src={pos3} alt="position 3" />
              <br />
              <small className="text-muted">
                Imagen tomada de folleto cuidado en el postparto a la madre y el
                recién nacido. Grupo académico perinatal UNAL
              </small>
              <p>👶🏼 Postura estirada posición recostada de lado</p>
              <img src={pos4} alt="position 4" />
              <br />
              <small className="text-muted">
                Imagen tomada de folleto cuidado en el postparto a la madre y el
                recién nacido. Grupo académico perinatal UNAL
              </small>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="9">
            <h5>Fuente de información</h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="9">
            <Card.Body>
              <p>
                La información suministrada en la sección "cuidado neonatal" ha
                sido recolectada del folleto "Cuidado en el posparto a la madre
                y el recién nacido" por el grupo académico materno perinatal de
                la Universidad Nacional de Colombia Sede Bogotá.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};

export default Acordion;
