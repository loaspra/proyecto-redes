import React from "react";

import ChartistGraph from "react-chartist";

import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

import Store from "@material-ui/icons/Store";
import WarningIcon from "@material-ui/icons/Warning";
import AccessTime from "@material-ui/icons/AccessTime";
import Cloud from "@material-ui/icons/Cloud";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";


import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() 
{
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info">
              <CardIcon color="info">
                <Icon>content_copy</Icon>
              </CardIcon>
              <h>Ancho de Banda Usado</h>
              <big>
                <br></br>39.3% <br></br>393 /1000 <small>Gb/s</small>
              </big>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning">
              <CardIcon color="info">
                <Store />
              </CardIcon>
              <h>Máquinas usadas</h>
              <big>
                <br></br>77% <br></br> 30 de 39 <small>Máquinas</small>
              </big>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="primary">
              <CardIcon color="info">
                <Store />
              </CardIcon>
              <h>Uso de CPU principal</h>
              <big>
                <br></br>9.1% <br></br> freq: 3.9 <small>GHz</small>
              </big>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger">
              <CardIcon color="warning">
                <Store />
              </CardIcon>
              <h>Potencia Eléctrica</h>
              <big>
                <br></br>79% <br></br> 79 de 100 <small>KW</small>
              </big>
            </CardHeader>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Ganancias mensuales (?)</h4>
              <p  className={classes.cardCategory}>Cifras en Dólares Americanos (por la devaluación del PEN) </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Bar"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Máquinas ocupando el mayor ancho de banda</h4>
              <small align = "right"> {">"} 25 Mbps</small>
              <p className={classes.cardCategory}>Incidencias de hoy día</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Actualizado hace 5 minutos
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Alertas graves generales</h4>
              <p className={classes.cardCategory}>Notificaciones de brechas de premisos o seguridad</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Actualizado: {Date(Date.now())}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Info:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Registros", //pedidos que se deben atender, tipo piezas de repuesto, xd
                tabIcon: ExitToAppIcon,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs} //cambiar nombre
                  />
                ),
              },
              {
                tabName: "Auditoría",
                tabIcon: WarningIcon,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website} //estos serían avisos importantes sobre los pendejos de la cabian (tipo que hacen cosas sin permiso)
                  />
                ),
              },
              {
                tabName: "Nupestre",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                ),
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Salarios de Empleados</h4>
              <p className={classes.cardCategoryWhite}>
                Excluyendo crédito fiscal
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Alex Pocohuanca", "$47,738", "República Independiente de Arequipa (R.I.A.)"],
                  ["2", "Santiago Madariaga", "$39,789", "República Independiente de Arequipa (R.I.A.)"],
                  ["3", "Leonardo", "$38,937", "Perú"],
                  ["4", "Nina Farro", "$17,500", "Perú"],
                  ["5", "Eduardo Quito Igreda", "<desempleado>", "Perú"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
