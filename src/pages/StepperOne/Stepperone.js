import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './_stepperone.scss';
import Login from '../../components/Login.js/Login';
import Breadcrumb from '../../components/Breadcrump.js/Breadcrumb';
import Stepone from '../../components/StepOne/Stepone';
import Steptwo from '../../components/StepTwo/Steptwo';
import Stepthree from '../../components/StepThree/Stepthree';

const steps = ['Sürücü haqqında məlumat', 'Nəqliyyat vasitəsi haqqında məlumat', 'Digər məlumatlar', 'Ödəniş']

export default function HorizontalNonLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed,] = React.useState({});

    const totalSteps = () => {
        return steps.length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    return (
        <div className='stepperOne'>
            <Login />
            <Breadcrumb />
            <Box sx={{ width: '100%' }}>
                <Stepper style={{ border: '0.730594px solid #DFE0EB', display: 'flex', alignItems: 'center', padding: '0 10px', height: '15vh', backgroundColor: '#FCFDFE', borderRadius: '10px' }} nonLinear activeStep={activeStep} alternativeLabel>
                    {steps.map((label, index) => (
                        <Step key={label} completed={completed[index]}>
                            <StepButton color="inherit" onClick={handleStep(index)}></StepButton>
                            <p style={{ fontSize: '12px', textAlign: 'center', marginTop: '5px' }}>{label}</p>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                            {activeStep === 0 && <Stepone />}
                            {activeStep === 1 && <Steptwo />}
                            {activeStep === 2 && <Stepthree />}
                            {activeStep === 3 &&
                                <div style={{ height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', border: '0.730594px solid #DFE0EB', backgroundColor: '#fff' }}>
                                    Ödənis Səhifəsi
                                </div>
                            }
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Button
                                sx={{ marginRight: '10px', width: '150px' }}
                                variant="contained"
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                            >
                                Geri
                            </Button>
                            <Button sx={{ marginLeft: '10px', width: '150px' }} variant="contained" onClick={handleNext}>
                                İrəli
                            </Button>
                        </Box>
                    </React.Fragment>
                </div>
            </Box>
        </div>
    );
}
