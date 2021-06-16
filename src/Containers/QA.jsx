import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import AccordionCard from "../components/AccordionCard";

const QA = () => {
  return (
    <Container>
      <Row className="my-5">
        <Col>
          <Accordion defaultActiveKey="0">
            <AccordionCard
              eventKey={"0"}
              title={"¿Por qué está mi bebé en la NICU?"}
              body={
                "Su bebé está en la NICU en observación y para recibir atención especial del personal de enfermería, los médicos y demás profesionales que están especialmente capacitados para cuidar a recién nacidos prematuros o enfermos."
              }
              font={
                "https://christianacare.org/es/maternidad/unidad-de-cuidados-intensivos-neonatales/preguntas-frecuentes-sobre-la-unidad-de-cuidados-intensivos-neonatales-neonatal-intensive-care-unit-nicu/"
              }
            />
            <AccordionCard
              eventKey={"1"}
              title={"¿Cuánto tiempo estará mi bebé en la NICU?"}
              body={
                "Debería consultarle esto al médico de su bebé. Por lo general, los bebés se quedan en la NICU hasta que su estado mejora lo suficiente para irse a casa. Si nació de forma prematura, su bebé necesitará poder respirar bien sin ayuda, mantener una temperatura corporal normal, alimentarse bien, subir de peso con normalidad y no presentar signos o síntomas de enfermedad o infección."
              }
              font={
                "https://christianacare.org/es/maternidad/unidad-de-cuidados-intensivos-neonatales/preguntas-frecuentes-sobre-la-unidad-de-cuidados-intensivos-neonatales-neonatal-intensive-care-unit-nicu/"
              }
            />
            <AccordionCard
              eventKey={"2"}
              title={"¿Qué molestias puede presentar mi bebé?"}
              body={`Pujar, estornudar, hipo, tener congestión nasal y deposiciones blandas frecuentes, y el llanto son las molestias que tu bebé prematuro puede experimentar. Sin embargo, este último es la más usual y debes atenderlo lo más pronto posible. Puedes empezar por hablarle o cantarle, haciéndole sentir que estás ahí, mientras revisas cuál puede ser la causa de la molestia. Revisa su pañal, puede ser que quiera lactar o esté indispuesto por los gases. Acomódalo y no lo cubras demasiado.`}
              font={
                "https://descubretusalud.com/programa-mama-canguro-recomendaciones-para-cuidar-a-tu-bebe-desde-casa/"
              }
            />
            <AccordionCard
              eventKey={"3"}
              title={"¿Cuáles son los principales signos de alarma?"}
              body={
                "Existen unos signos de alarma a los que debes estar atento para acudir a los servicios de urgencias. No te descuides cuando la piel de tu bebé se torna azulada (cianosis), tenga dificultad para respirar o deje de hacerlo, sus deposiciones vienen con moco o sangre y disminuye su tono muscular, es decir que parece flácido y tiene un control deficiente de su cabeza. Consulta cuando notes signos de infección en su ombligo o tenga un descenso o aumento brusco de su temperatura corporal. El vómito frecuente y el rechazo a la alimentación también son signos de alarma."
              }
              font={
                "https://descubretusalud.com/programa-mama-canguro-recomendaciones-para-cuidar-a-tu-bebe-desde-casa/"
              }
            />
            <AccordionCard
              eventKey={"4"}
              title={"¿Cómo manejo las visitas?"}
              body={
                "Para todos los recién nacidos, es ideal que en sus primeros 30 días de vida reciban muy pocas visitas para disminuir el riesgo de infecciones y si se trata de un bebé prematuro se deben restringir aún más. Sin embargo, quienes lo visiten deben lavarse sus manos con agua y jabón, y no permitas que le den besos. No lo expongas al contacto con personas resfriadas o con enfermedades contagiosas, así como a niños en edad escolar, pues por su edad son propensos a la gripa y enfermedades respiratorias. En caso de que tengas resfriado, puedes usar un tapaboca."
              }
              font={
                "https://descubretusalud.com/programa-mama-canguro-recomendaciones-para-cuidar-a-tu-bebe-desde-casa/"
              }
            />
            <AccordionCard
              eventKey={"5"}
              title={"¿Cómo lo baño y alimento?"}
              body={
                "Debido a las dificultades para controlar su temperatura, su aseo sólo lo debes realizar con una esponja suave. Aliméntalo con leche materna o a la fórmula especial de prematuros indicada por el pediatra; por ningún motivo puede recibir otro tipo de alimentos. La mayoría de los bebés prematuros se alimentan entre ocho y diez veces al día, no esperes más de cuatro horas para alimentarlo."
              }
              font={
                "https://descubretusalud.com/programa-mama-canguro-recomendaciones-para-cuidar-a-tu-bebe-desde-casa/"
              }
            />
            <AccordionCard
              eventKey={"6"}
              title={
                "¿Qué cosas no se deben hacer mientras mi bebé está en posición canguro?"
              }
              body={
                "Tu bebé debe permanecer acostado sobre tu pecho de manera horizontal, sin más ropa que su pañal y un gorro para su cabeza. No puedes moverlo de esa posición para algo diferente de alimentarlo o cambiarlo. Evita la manipulación excesiva del bebé, así como la ﬂexión e hiperextensión de su cuello. No lo calientes con lámparas o botellas con agua caliente porque puedes lesionarlo. Al igual que los demás recién nacidos, los bebés prematuros no se deben fajar ni colocarles botones en el ombligo para evitar infecciones en esa zona"
              }
              font={
                "https://descubretusalud.com/programa-mama-canguro-recomendaciones-para-cuidar-a-tu-bebe-desde-casa/"
              }
            />
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default QA;