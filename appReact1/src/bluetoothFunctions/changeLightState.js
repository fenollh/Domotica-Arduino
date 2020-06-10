
const changeLightState = (index, item, context) => {
    context.state.lightsStatus[index].status = !context.state.lightsStatus[index].status
    context.setState({ 
        lightsStatus: context.state.lightsStatus,
        lightsOn: context.countLightsOn()
    })
}
export {changeLightState}