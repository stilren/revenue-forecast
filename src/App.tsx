import React, { Component, SyntheticEvent } from "react";
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
  TextInput,
  Text,
  DataTable,
  Meter,
  Distribution,
  Grid,
  Form,
  FormField
} from "grommet";
import { FormClose, Edit, Trash } from "grommet-icons";
import * as V from "victory";
import { VictoryBar, VictoryArea } from "victory";
import { getData, getStackData } from "./Churn";

const theme = {
  global: {
    colors: {
      brand: "#228BE6"
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

//@ts-ignore
const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

type State = {
  showSidebar: boolean;
  months: number;
  cohorts: Cohort[];
};

export type Cohort = {
  name: string;
  montlyUser: number;
  churn: number;
  id: string;
};

class App extends Component<{}, State> {
  state = {
    showSidebar: false,
    cohorts: [
      { id: "1", name: "A", montlyUser: 100, churn: 30 },
      { id: "2", name: "B", montlyUser: 50, churn: 10 },
      { id: "3", name: "C", montlyUser: 100, churn: 20 }
    ],
    months: 24
  };
  parseInput(x: string): number {
    return Number.isNaN(parseInt(x)) ? 0 : parseInt(x);
  }
  deleteCohort(id: string) {
    console.log("deleteing " + id);
    this.setState(prevState => ({
      ...prevState,
      cohorts: prevState.cohorts.filter(c => c.id !== id)
    }));
  }
  render() {
    console.log(this.state.cohorts);
    const stackData = getStackData(this.state.cohorts, this.state.months);
    console.log(stackData);
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                <Heading level="3" margin="none">
                  Revenue forecast
                </Heading>
                <Button
                  icon={<Edit />}
                  onClick={() =>
                    this.setState({ showSidebar: !this.state.showSidebar })
                  }
                />
              </AppBar>
              <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
                <Box flex align="center">
                  <Grid>
                    <V.VictoryChart theme={V.VictoryTheme.material}>
                      <V.VictoryStack theme={V.VictoryTheme.material}>
                        {stackData.map(c => {
                          return (
                            <VictoryArea interpolation="natural" data={c} />
                          );
                        })}
                      </V.VictoryStack>
                    </V.VictoryChart>
                    <DataTable
                      columns={[
                        {
                          property: "name",
                          header: <Text>Name</Text>,
                          primary: true
                        },
                        {
                          property: "montlyUser",
                          header: <Text>Monthly user growth</Text>,
                          primary: true
                        },
                        {
                          property: "churn",
                          header: <Text>Monthly churn (%)</Text>,
                          primary: true
                        }
                      ]}
                      data={this.state.cohorts}
                    />
                  </Grid>
                </Box>
                <Box />
                {!showSidebar || size !== "small" ? (
                  <Collapsible
                    direction="horizontal"
                    open={this.state.showSidebar}
                  >
                    <Box
                      flex
                      width="large"
                      background="light-3"
                      elevation="small"
                      align="center"
                      justify="center"
                    >
                      <Grid>
                        <DataTable
                          columns={[
                            {
                              property: "name",
                              header: <Text>Name</Text>,
                              primary: true
                            },
                            {
                              property: "montlyUser",
                              header: <Text>Growth</Text>,
                              primary: true
                            },
                            {
                              property: "churn",
                              header: <Text>Churn</Text>,
                              primary: true
                            },
                            {
                              property: "id",
                              primary: true,
                              render: cohort => (
                                <Button
                                  icon={<Trash />}
                                  onClick={() => this.deleteCohort(cohort.id)}
                                />
                              )
                            }
                          ]}
                          data={this.state.cohorts}
                        />
                        <Form
                          onSubmit={(event: SyntheticEvent) => {
                            console.log(event);
                            this.setState(prevState => {
                              return {
                                ...prevState,
                                cohorts: prevState.cohorts.concat([
                                  {
                                    //@ts-ignore
                                    name: event.value.name,
                                    //@ts-ignore
                                    id: event.value.name,
                                    //@ts-ignore
                                    churn: event.value.monthlyChurn,
                                    //@ts-ignore
                                    montlyUser: event.value.monthlyGrowth
                                  }
                                ])
                              };
                            });
                          }}
                        >
                          <Heading level="3" margin="none">
                            Add cohort
                          </Heading>
                          <FormField name="name" label="Name" />
                          <FormField
                            name="monthlyGrowth"
                            label="Monthly user growth"
                          />
                          <FormField
                            name="monthlyChurn"
                            label="Monthly churn"
                          />
                          <Button type="submit" primary label="Submit" />
                        </Form>
                      </Grid>
                    </Box>
                  </Collapsible>
                ) : (
                  <Layer>
                    <Box
                      background="light-2"
                      tag="header"
                      justify="end"
                      align="center"
                      direction="row"
                    >
                      <Button
                        icon={<FormClose />}
                        onClick={() => this.setState({ showSidebar: false })}
                      />
                    </Box>
                    <Box fill background="light-2">
                      <Grid>
                        <DataTable
                          columns={[
                            {
                              property: "name",
                              header: <Text>Name</Text>,
                              primary: true
                            },
                            {
                              property: "montlyUser",
                              header: <Text>Growth</Text>,
                              primary: true
                            },
                            {
                              property: "churn",
                              header: <Text>Churn</Text>,
                              primary: true
                            },
                            {
                              property: "id",
                              primary: true,
                              render: cohort => (
                                <Button
                                  icon={<Trash />}
                                  onClick={() => this.deleteCohort(cohort.id)}
                                />
                              )
                            }
                          ]}
                          data={this.state.cohorts}
                        />
                        <Form
                          onSubmit={(event: SyntheticEvent) => {
                            this.setState(prevState => {
                              return {
                                ...prevState,
                                cohorts: prevState.cohorts.concat([
                                  {
                                    //@ts-ignore
                                    name: event.value.name,
                                    //@ts-ignore
                                    id: event.value.name,
                                    churn: this.parseInput(
                                      //@ts-ignore
                                      event.value.monthlyChurn
                                    ),
                                    montlyUser: this.parseInput(
                                      //@ts-ignore
                                      event.value.monthlyGrowth
                                    )
                                  }
                                ])
                              };
                            });
                          }}
                        >
                          <Heading level="3" margin="none">
                            Add cohort
                          </Heading>
                          <FormField name="name" label="Name" />
                          <FormField
                            name="monthlyGrowth"
                            label="Monthly user growth"
                          />
                          <FormField
                            name="monthlyChurn"
                            label="Monthly churn (%)"
                          />
                          <Button type="submit" primary label="Submit" />
                        </Form>
                      </Grid>
                    </Box>
                  </Layer>
                )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
