import { ControllerProps } from "./controllers/controller-props"

// export const SECURE:string = "secure"
export const ACCOUNT:string = "account"

export const AUTH:ControllerProps = new ControllerProps()
AUTH.NAME = "auth"
AUTH.HOST = "authapi.ingress.tmsolution.consul"