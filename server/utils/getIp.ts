// import isInSubnet from "ip-range-check";
import { H3Event } from "h3";

// NOT WORKING BEHIND PROXY CURRENTLY BECAUSE OF NITRO BUG
// see more:
// https://github.com/nuxt/nuxt/issues/18609
// https://github.com/unjs/nitro/pull/896

const loopback = ["127.0.0.1/8", "::1/128"];
const linklocal = ["168.254.0.0/16", "fe80::/10"];
const uniquelocal = [
  "10.0.0.0/8",
  "172.16.0.0/12",
  "192.168.0.0/16",
  "fc00::7",
];

// TODO: get from runtime config or set to uniquelocal variant
const trustedIPs = [...uniquelocal];

const headersToCheck = ["x-forwarded-for"];

export default function getIp(event: H3Event) {
  const req = event.node.req;
  let clientIp = "";

  const remoteAddress = req.socket.remoteAddress as string;
  let isTrusted = true;
  // if (remoteAddress) {
    // isTrusted = isInSubnet(remoteAddress, trustedIPs);
  // } else {
    // isTrusted = true;
  // }

  if (isTrusted) {
    // maybe proxy
    for (const headerName of headersToCheck) {
      const headerValue = req.headers[headerName];
      if (!clientIp && typeof headerValue === "string") {
        const ips = headerValue
          .split(",")
          .map((e) => e.trim())
          .reverse();

        for (const ip of ips) {
          // if (isInSubnet(ip, trustedIPs)) {
          //   continue;
          // }
          clientIp = ip;
          break;
        }
      }
    }
  }

  if (!clientIp) {
    clientIp = remoteAddress;
  }

  return clientIp;
}