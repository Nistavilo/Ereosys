import {
  Terminal,
  Code,
  Database,
  Shield,
  Cloud,
  Building2,
  Users,
  Rocket
} from "lucide-react";
import { StatItem } from "./types";

export const FLOATING_ICONS = [Terminal, Code, Database, Shield, Cloud, Building2];

export const STATS: StatItem[] = [
  { value: "99.9%", label: "UPTIME", color: "text-cyan-400", icon: Shield },
  { value: "15K+", label: "ACTIVE USERS", color: "text-purple-400", icon: Users },
  { value: "5+", label: "SAAS PRODUCTS", color: "text-pink-400", icon: Rocket }
];

export const FLOATING_CHARS_SET = "EREOSYS<>{}()";
export const FLOATING_CHARS_COUNT = 20;

export const CODE_EXAMPLE = `// Integrate Ereosys Products
import { 
  EreoCRM, 
  EreoAnalytics, 
  EreoCloud 
} from '@ereosys/sdk'

export function MyApp() {
  const [user, setUser] = useState(null)
  
  return (
    <EreoCloud region="us-east-1">
      <EreoCRM 
        apiKey="your-api-key"
        features={["contacts", "deals", "automation"]}
      >
        <EreoAnalytics 
          tracking={true}
          realtime={true}
          dashboards="custom"
        >
          <YourApplication 
            user={user}
            onEvent={(event) => track(event)}
          />
        </EreoAnalytics>
      </EreoCRM>
    </EreoCloud>
  )
}`;
