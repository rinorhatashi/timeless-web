import { PageLayout, Section, Card, TimelinePhase } from '@/components/ui/page-layout'

export default function EmbeddedEdgeAIPage() {
  return (
    <PageLayout
      title="Embedded Systems & Edge AI"
      description="We architect, implement, and optimize embedded stacks from PCB to perception. Deterministic control where needed, high-throughput inference where possible, and safety always."
      breadcrumbs={[
        { label: 'Capabilities', href: '/capabilities' },
        { label: 'Embedded & Edge AI', href: '/capabilities/embedded-edge-ai' }
      ]}
    >
      <Section
        title="Overview"
        description="Embedded and edge systems must meet tight latency, energy, and safety budgets while remaining updatable in the field. We architect from PCB to perception to deliver deterministic control where needed and high‑throughput inference where possible-without compromising certification pathways or fleet operations."
      >
        <div className="content-prose">
          <p>Our approach is layered and measurable. Hardware and BSP choices set the envelope; the OS/RT layer enforces scheduling and QoS; perception and inference pipelines are tuned for end‑to‑end latency and energy; connectivity and OTA keep fleets healthy; and safety artifacts make decisions auditable. We build traceability across the stack so we can reproduce and optimize behaviors under real workloads.</p>
        </div>
      </Section>

      <Section
        title="Stack Overview"
        description="A layered approach to predictable performance"
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Hardware & BSP</h4>
            <p>Board bring-up, bootloaders, secure boot, power/thermal envelopes, and drivers for sensors/actuators.</p>
          </div>
          <div className="platform-item">
            <h4>OS & RT</h4>
            <p>RTOS or Linux (PREEMPT_RT), IPC, scheduling, and QoS for deterministic workloads.</p>
          </div>
          <div className="platform-item">
            <h4>Perception</h4>
            <p>Sensor fusion (EKF/UKF), CV pipelines, calibration, and model runtime abstraction.</p>
          </div>
          <div className="platform-item">
            <h4>Inference</h4>
            <p>CUDA/TensorRT/OpenVINO/NPU SDKs; quantization, sparsity, and mixed precision for latency/energy targets.</p>
          </div>
          <div className="platform-item">
            <h4>Connectivity</h4>
            <p>TSN, CAN, EtherCAT, gRPC, and OTA update frameworks with staged rollouts and rollback.</p>
          </div>
          <div className="platform-item">
            <h4>Safety</h4>
            <p>ISO 26262/IEC 61508 artifacts, FMEA/FMEDA, and independence of safety and convenience domains.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Optimization & Tooling"
        description="Tuning for latency, throughput, and energy"
      >
        <div className="grid-2">
          <Card
            title="Profiling"
            description="Nsight/SystemTap/eBPF traces; hotspots from ISR to kernel to userland."
          />
          <Card
            title="Model optimization"
            description="Calibration, INT8/FP16 plans, pipeline fusion, and batching strategies."
          />
          <Card
            title="Reliability"
            description="Watchdogs, degraded modes, bounded queues, and brownout behavior."
          />
          <Card
            title="OTA & Fleet"
            description="Delta updates, staged canaries, device attestation, and fleet observability."
          />
        </div>
      </Section>

      <Section
        title="Architecture Patterns"
        description="Determinism where it counts, throughput where it helps"
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Time‑critical path</h4>
            <p>Hard/firm real‑time threads for actuation and safety interlocks; bounded memory; priority inheritance; static allocation for predictability.</p>
          </div>
          <div className="platform-item">
            <h4>Perception path</h4>
            <p>Double‑buffered DMA, zero‑copy kernels, and fused operators; batch size tuned against latency/energy targets with backpressure.</p>
          </div>
          <div className="platform-item">
            <h4>Control loop</h4>
            <p>MPC/robust PID with carefully quantized signals; latency budgets per stage; health checks and fallback modes on sensor loss.</p>
          </div>
          <div className="platform-item">
            <h4>Edge cache</h4>
            <p>Feature/inference cache keyed by context; TTL/eviction policies; prefetching for known routes or tasks.</p>
          </div>
          <div className="platform-item">
            <h4>Telemetry</h4>
            <p>Efficient, structured logs and metrics with sampling; on‑device ring buffers flushed on connectivity; privacy‑aware filters.</p>
          </div>
          <div className="platform-item">
            <h4>Secure boot</h4>
            <p>Measured boot, chain of trust, signed firmware, and secure update ceremonies with rollback protection.</p>
          </div>
        </div>
      </Section>

      <Section
        title="Safety & Certification"
        description="Artifacts and independence for regulated environments"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Safety case</h4>
            <p>Hazard analysis, FMEA/FMEDA, and safety goals mapped to technical mitigations; independence between safety and convenience domains.</p>
          </div>
          <div className="platform-item">
            <h4>Tracing</h4>
            <p>Design evidence, code reviews, test matrices, coverage, and HW/SW traceability for audits and root‑cause analysis.</p>
          </div>
          <div className="platform-item">
            <h4>Diagnostics</h4>
            <p>Built‑in tests, self‑checks, stuck‑bit detection, and watchdog resets; limp‑home strategies and safe degraded modes.</p>
          </div>
          <div className="platform-item">
            <h4>Data governance</h4>
            <p>PII/PHI handling policies, on‑device redaction, secure storage, and time‑bounded retention; reproducible export for compliance.</p>
          </div>
          <div className="platform-item">
            <h4>Tool qualification</h4>
            <p>Controlled toolchains and verified versions for compilers, model compilers, and static analysis as required by standards.</p>
          </div>
          <div className="platform-item">
            <h4>Procedures</h4>
            <p>HIL, SIL, and field test plans with acceptance criteria; change control and sign‑off workflows integrated with OTA.</p>
          </div>
        </div>
      </Section>

      <Section
        title="KPIs & Benchmarks"
        description="Quantify performance and reliability at the edge"
        variant="alt"
      >
        <div className="platform-grid">
          <div className="platform-item">
            <h4>Latency budget</h4>
            <p>End‑to‑end and per‑stage P50/P95 with variance; budget regressions block release.</p>
          </div>
          <div className="platform-item">
            <h4>Energy/thermal</h4>
            <p>Joules per inference and thermal headroom across ambient profiles; throttling detection.</p>
          </div>
          <div className="platform-item">
            <h4>Reliability</h4>
            <p>Crash‑free sessions, watchdog events, and degraded‑mode frequency; mean time between failures.</p>
          </div>
          <div className="platform-item">
            <h4>Accuracy</h4>
            <p>Task‑specific metrics (mAP, F1, CER, WER) under real sensor noise; drift monitoring.</p>
          </div>
          <div className="platform-item">
            <h4>Fleet metrics</h4>
            <p>Update success rates, rollback rates, time‑to‑patch, and device compliance.</p>
          </div>
          <div className="platform-item">
            <h4>Security</h4>
            <p>Attestation pass rates, key rotations, and blocked tamper attempts.</p>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
} 