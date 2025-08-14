import React, { useState, useEffect } from "react";
import {
  Shield,
  Eye,
  EyeOff,
  Send,
  CheckCircle,
  Clock,
  Lock,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import logo from "./assets/logo.png";
const App = () => {
  const [receiverAddress, setReceiverAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [encryptionStep, setEncryptionStep] = useState(0);
  const [flowchartStep, setFlowchartStep] = useState(0);

  const handleSendTransaction = () => {
    if (!receiverAddress || !amount) return;

    setIsProcessing(true);
    setShowComparison(true);
    setEncryptionStep(0);
    setFlowchartStep(0);

    // Simulate encryption process and flowchart animation
    const steps = [1, 2, 3, 4, 5];
    steps.forEach((step, index) => {
      setTimeout(() => {
        setEncryptionStep(step);
        setFlowchartStep(step);
        if (step === 5) {
          setIsProcessing(false);
        }
      }, (index + 1) * 1200);
    });
  };

  const generateRandomHash = () => {
    return "0x" + Math.random().toString(16).substr(2, 40);
  };

  const generateEncryptedData = () => {
    return "enc_" + Math.random().toString(36).substr(2, 32);
  };

  const FlowchartStep = ({
    step,
    title,
    description,
    isActive,
    isCompleted,
    color,
  }) => (
    <div
      className={`relative p-4 rounded-lg border-2 transition-all duration-500 ${
        isActive
          ? `border-${color} bg-${color} bg-opacity-20`
          : isCompleted
          ? `border-green-500 bg-green-500 bg-opacity-20`
          : "border-gray-600 bg-gray-800 bg-opacity-20"
      }`}
    >
      <div className="flex items-center mb-2">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
            isCompleted
              ? "bg-green-500 text-white"
              : isActive
              ? `bg-${color} text-white`
              : "bg-gray-600 text-gray-300"
          }`}
        >
          {isCompleted ? <CheckCircle className="w-5 h-5" /> : step}
        </div>
        <h4 className="ml-3 font-semibold text-white">{title}</h4>
      </div>
      <p className="text-sm text-gray-300 ml-11">{description}</p>
    </div>
  );

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#000", color: "#E6DED6" }}
    >
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            {/* <Shield className="w-10 h-10 mr-3" style={{ color: "#CDB296" }} /> */}
            <img
              className="h-12 w-12 mr-3"
              src={logo}
              alt="Seismic Blockchain Logo"
            />
            <h1 className="text-4xl font-bold" style={{ color: "#CDB296" }}>
              Seismic Blockchain
            </h1>
          </div>
          <p className="text-xl" style={{ color: "#E6DED6" }}>
            The Encrypted Blockchain - Privacy by Design
          </p>
        </div>

        {/* Transaction Form */}
        <div
          className="max-w-md mx-auto mb-12 rounded-2xl p-6 border"
          style={{
            backgroundColor: "#38261C",
            borderColor: "#795231",
          }}
        >
          <h2
            className="text-2xl font-semibold mb-6 text-center"
            style={{ color: "#CDB296" }}
          >
            Send Transaction
          </h2>

          <div className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "#E6DED6" }}
              >
                Receiver Address
              </label>
              <input
                type="text"
                value={receiverAddress}
                onChange={(e) => setReceiverAddress(e.target.value)}
                placeholder="0x742d35Cc6634C0532925a3b8D4C2F0F2a42F..."
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 text-white placeholder-gray-400"
                style={{
                  backgroundColor: "#222222",
                  borderColor: "#795231",
                  focusRingColor: "#CDB296",
                }}
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "#E6DED6" }}
              >
                Amount (USDT)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="100.00"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 text-white placeholder-gray-400"
                style={{
                  backgroundColor: "#222222",
                  borderColor: "#795231",
                }}
              />
            </div>

            <button
              onClick={handleSendTransaction}
              disabled={!receiverAddress || !amount || isProcessing}
              className="w-full px-6 py-3 text-white rounded-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
              style={{ backgroundColor: "#795231" }}
            >
              {isProcessing ? (
                <>
                  <Clock className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Transaction
                </>
              )}
            </button>
          </div>
        </div>

        {/* Flowchart Section */}
        {showComparison && (
          <div className="mb-12">
            <h2
              className="text-3xl font-bold text-center mb-8"
              style={{ color: "#CDB296" }}
            >
              Transaction Flow Comparison
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* Traditional Blockchain Flowchart */}
              <div
                className="rounded-2xl p-6 border"
                style={{
                  backgroundColor: "#38261C",
                  borderColor: "#795231",
                }}
              >
                <div className="flex items-center mb-6">
                  <Eye className="w-6 h-6 text-red-400 mr-3" />
                  <h3 className="text-xl font-bold text-red-400">
                    Traditional Blockchain Flow
                  </h3>
                </div>

                <div className="space-y-4">
                  <FlowchartStep
                    step={1}
                    title="Transaction Created"
                    description="User creates transaction with visible data"
                    isActive={flowchartStep === 1}
                    isCompleted={flowchartStep > 1}
                    color="red-500"
                  />

                  <div className="flex justify-center">
                    <ArrowDown className="w-6 h-6 text-red-400" />
                  </div>

                  <FlowchartStep
                    step={2}
                    title="Public Mempool"
                    description="Transaction broadcasted to public mempool"
                    isActive={flowchartStep === 2}
                    isCompleted={flowchartStep > 2}
                    color="red-500"
                  />

                  <div className="flex justify-center">
                    <ArrowDown className="w-6 h-6 text-red-400" />
                  </div>

                  <FlowchartStep
                    step={3}
                    title="Validation"
                    description="Miners validate with all data visible"
                    isActive={flowchartStep === 3}
                    isCompleted={flowchartStep > 3}
                    color="red-500"
                  />

                  <div className="flex justify-center">
                    <ArrowDown className="w-6 h-6 text-red-400" />
                  </div>

                  <FlowchartStep
                    step={4}
                    title="Public Block"
                    description="Transaction stored publicly on blockchain"
                    isActive={flowchartStep === 4}
                    isCompleted={flowchartStep > 4}
                    color="red-500"
                  />
                </div>
              </div>

              {/* Seismic Blockchain Flowchart */}
              <div
                className="rounded-2xl p-6 border"
                style={{
                  backgroundColor: "#38261C",
                  borderColor: "#795231",
                }}
              >
                <div className="flex items-center mb-6">
                  <Lock className="w-6 h-6 mr-3" style={{ color: "#CDB296" }} />
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#CDB296" }}
                  >
                    Seismic Blockchain Flow
                  </h3>
                </div>

                <div className="space-y-4">
                  <FlowchartStep
                    step={1}
                    title="Transaction Created"
                    description="User creates transaction with automatic encryption"
                    isActive={flowchartStep === 1}
                    isCompleted={flowchartStep > 1}
                    color="green-500"
                  />

                  <div className="flex justify-center">
                    <ArrowDown
                      className="w-6 h-6"
                      style={{ color: "#CDB296" }}
                    />
                  </div>

                  <FlowchartStep
                    step={2}
                    title="Encrypted Mempool"
                    description="Encrypted data sent to private mempool"
                    isActive={flowchartStep === 2}
                    isCompleted={flowchartStep > 2}
                    color="green-500"
                  />

                  <div className="flex justify-center">
                    <ArrowDown
                      className="w-6 h-6"
                      style={{ color: "#CDB296" }}
                    />
                  </div>

                  <FlowchartStep
                    step={3}
                    title="TEE Validation"
                    description="TEEs validate transactions while keeping data confidential."
                    isActive={flowchartStep === 3}
                    isCompleted={flowchartStep > 3}
                    color="green-500"
                  />

                  <div className="flex justify-center">
                    <ArrowDown
                      className="w-6 h-6"
                      style={{ color: "#CDB296" }}
                    />
                  </div>

                  <FlowchartStep
                    step={4}
                    title="Encrypted Block"
                    description="Transaction stored privately on blockchain"
                    isActive={flowchartStep === 4}
                    isCompleted={flowchartStep > 4}
                    color="green-500"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Real-time Data Comparison */}
        {showComparison && (
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {/* Traditional Blockchain Data */}
            <div
              className="rounded-2xl p-6 border border-red-500/30"
              style={{ backgroundColor: "#38261C" }}
            >
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-red-400 mr-3" />
                <h3 className="text-xl font-bold text-red-400">
                  Traditional Blockchain Data
                </h3>
              </div>

              <div className="space-y-4">
                <div
                  className="rounded-lg p-4 border border-red-500/20"
                  style={{ backgroundColor: "#222222" }}
                >
                  <h4 className="font-semibold text-red-300 mb-2">
                    Visible Transaction Data
                  </h4>
                  <div className="text-sm space-y-2">
                    <p>
                      <span className="text-gray-400">From:</span>{" "}
                      <span className="font-mono text-red-300">
                        0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b
                      </span>
                    </p>
                    <p>
                      <span className="text-gray-400">To:</span>{" "}
                      <span className="font-mono text-red-300">
                        {receiverAddress ||
                          "0x742d35Cc6634C0532925a3b8D4C2F0F2a42F..."}
                      </span>
                    </p>
                    <p>
                      <span className="text-gray-400">Amount:</span>{" "}
                      <span className="text-red-300">
                        {amount || "100.00"} USDT
                      </span>
                    </p>
                    <p>
                      <span className="text-gray-400">Gas Fee:</span>{" "}
                      <span className="text-red-300">0.0023 ETH</span>
                    </p>
                    <p>
                      <span className="text-gray-400">Nonce:</span>{" "}
                      <span className="text-red-300">42</span>
                    </p>
                    <p>
                      <span className="text-gray-400">Timestamp:</span>{" "}
                      <span className="text-red-300">
                        {new Date().toLocaleString()}
                      </span>
                    </p>
                  </div>
                </div>

                <div
                  className="rounded-lg p-4 border border-red-500/20"
                  style={{ backgroundColor: "#222222" }}
                >
                  <h4 className="font-semibold text-red-300 mb-2">
                    Public Transaction Hash
                  </h4>
                  <p className="font-mono text-xs text-red-300 break-all">
                    {generateRandomHash()}
                  </p>
                </div>

                <div
                  className="rounded-lg p-4 border border-red-500/20"
                  style={{ backgroundColor: "#222222" }}
                >
                  <h4 className="font-semibold text-red-300 mb-2">
                    Block Information
                  </h4>
                  <div className="text-sm space-y-1">
                    <p>
                      <span className="text-gray-400">Block Height:</span>{" "}
                      <span className="text-red-300">18,542,156</span>
                    </p>
                    <p>
                      <span className="text-gray-400">Block Hash:</span>{" "}
                      <span className="font-mono text-red-300 text-xs">
                        {generateRandomHash()}
                      </span>
                    </p>
                    <p>
                      <span className="text-gray-400">Confirmations:</span>{" "}
                      <span className="text-red-300">12</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center text-red-400 bg-red-900/20 p-3 rounded-lg">
                  <Eye className="w-4 h-4 mr-2" />
                  <span className="text-sm">
                    All data publicly visible and traceable
                  </span>
                </div>
              </div>
            </div>

            {/* Seismic Blockchain Data */}
            <div
              className="rounded-2xl p-6 border"
              style={{
                backgroundColor: "#38261C",
                borderColor: "#795231",
              }}
            >
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 mr-3" style={{ color: "#CDB296" }} />
                <h3 className="text-xl font-bold" style={{ color: "#CDB296" }}>
                  Seismic Blockchain Data
                </h3>
              </div>

              <div className="space-y-4">
                <div
                  className="rounded-lg p-4 border"
                  style={{
                    backgroundColor: "#222222",
                    borderColor: "#795231",
                  }}
                >
                  <h4
                    className="font-semibold mb-2"
                    style={{ color: "#CDB296" }}
                  >
                    Encrypted Transaction Data
                  </h4>
                  <div className="text-sm space-y-2">
                    <p>
                      <span className="text-gray-400">From:</span>{" "}
                      <span className="font-mono" style={{ color: "#CDB296" }}>
                        {generateEncryptedData()}
                      </span>
                    </p>
                    <p>
                      <span className="text-gray-400">To:</span>{" "}
                      <span className="font-mono" style={{ color: "#CDB296" }}>
                        {generateEncryptedData()}
                      </span>
                    </p>
                    <p>
                      <span className="text-gray-400">Amount:</span>{" "}
                      <span className="font-mono" style={{ color: "#CDB296" }}>
                        {generateEncryptedData()}
                      </span>
                    </p>
                    <p>
                      <span className="text-gray-400">Metadata:</span>{" "}
                      <span className="font-mono" style={{ color: "#CDB296" }}>
                        {generateEncryptedData()}
                      </span>
                    </p>

                    <p>
                      <span className="text-gray-400">Timestamp:</span>{" "}
                      <span className="font-mono" style={{ color: "#CDB296" }}>
                        {generateEncryptedData()}
                      </span>
                    </p>
                  </div>
                </div>

                <div
                  className="rounded-lg p-4 border"
                  style={{
                    backgroundColor: "#222222",
                    borderColor: "#795231",
                  }}
                >
                  <h4
                    className="font-semibold mb-2"
                    style={{ color: "#CDB296" }}
                  >
                    Encrypted Transaction Hash
                  </h4>
                  <p
                    className="font-mono text-xs break-all"
                    style={{ color: "#CDB296" }}
                  >
                    {generateEncryptedData()}.{generateEncryptedData()}
                  </p>
                </div>

                <div
                  className="rounded-lg p-4 border"
                  style={{
                    backgroundColor: "#222222",
                    borderColor: "#795231",
                  }}
                >
                  <h4
                    className="font-semibold mb-2"
                    style={{ color: "#CDB296" }}
                  >
                    Block Information
                  </h4>
                  <div className="text-sm space-y-1">
                    <p>
                      <span className="text-gray-400">Block Height:</span>{" "}
                      <span style={{ color: "#CDB296" }}>18,542,156</span>
                    </p>
                    <p>
                      <span className="text-gray-400">Block Hash:</span>{" "}
                      <span
                        className="font-mono text-xs"
                        style={{ color: "#CDB296" }}
                      >
                        {generateEncryptedData()}
                      </span>
                    </p>
                    <p>
                      <span className="text-gray-400">Proof Verified:</span>{" "}
                      <span className="text-green-400">✓ Valid</span>
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-center p-3 rounded-lg"
                  style={{
                    backgroundColor: "#795231",
                    color: "#E6DED6",
                  }}
                >
                  <EyeOff className="w-4 h-4 mr-2" />
                  <span className="text-sm">
                    Private data, visible only to authorized parties
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ color: "#CDB296" }}>
            Why Choose Seismic?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div
              className="rounded-xl p-6 border"
              style={{
                backgroundColor: "#38261C",
                borderColor: "#795231",
              }}
            >
              <Shield
                className="w-12 h-12 mx-auto mb-4"
                style={{ color: "#CDB296" }}
              />
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "#CDB296" }}
              >
                Protocol-Level Encryption
              </h3>
              <p style={{ color: "#E6DED6" }}>
                All transactions are encrypted at the protocol level, ensuring
                complete privacy.
              </p>
            </div>
            <div
              className="rounded-xl p-6 border"
              style={{
                backgroundColor: "#38261C",
                borderColor: "#795231",
              }}
            >
              <Lock
                className="w-12 h-12 mx-auto mb-4"
                style={{ color: "#CDB296" }}
              />
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "#CDB296" }}
              >
                Private by Design
              </h3>
              <p style={{ color: "#E6DED6" }}>
                Unlike traditional blockchains, Seismic keeps your financial
                data private.
              </p>
            </div>
            <div
              className="rounded-xl p-6 border"
              style={{
                backgroundColor: "#38261C",
                borderColor: "#795231",
              }}
            >
              <EyeOff
                className="w-12 h-12 mx-auto mb-4"
                style={{ color: "#CDB296" }}
              />
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "#CDB296" }}
              >
                Trusted Execution Environments (TEEs)
              </h3>
              <p style={{ color: "#E6DED6" }}>
                Securely process and validate transactions within
                hardware-enforced privacy enclaves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
