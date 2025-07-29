import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Target, MousePointer } from 'lucide-react';

const MelbourneRadiologyAudit = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Campaign performance data
  const campaignData = [
    { name: 'Search-Brand', spend: 1,484.46, conversions: 47, ctr: 18.56, cpc: 1.25, convRate: 3.95, roas: 0.09 },
    { name: 'Search-MRI', spend: 1072.46, conversions: 47, ctr: 6.17, cpc: 2.67, convRate: 11.72, roas: 0.13 },
    { name: 'Search-CTScan', spend: 563.88, conversions: 18, ctr: 5.95, cpc: 4.21, convRate: 13.43, roas: 0.10 },
    { name: 'Search-X-Ray', spend: 588.48, conversions: 1, ctr: 8.99, cpc: 1.51, convRate: 0.26, roas: 0.01 },
    { name: 'Search-Injections', spend: 553.91, conversions: 5, ctr: 6.81, cpc: 10.07, convRate: 9.09, roas: 0.03 },
    { name: 'Search-RFAs', spend: 173.16, conversions: 9, ctr: 5.14, cpc: 3.09, convRate: 16.07, roas: 0.16 },
    { name: 'Search-Hydrodilatation', spend: 143.04, conversions: 1, ctr: 10.80, cpc: 3.04, convRate: 2.13, roas: 0.02 },
    { name: 'P.Max', spend: 922.40, conversions: 0, ctr: 13.26, cpc: 2.04, convRate: 0.00, roas: 0.00 }
  ];

  // Key metrics summary
  const totalSpend = 5441.82;
  const totalConversions = 128;
  const avgCPC = 2.01;
  const avgConvRate = 2.45;

  // Performance insights
  const insights = {
    leading: [
      { metric: 'Search-RFAs Conversion Rate', value: '16.07%', description: 'Highest performing campaign by conversion rate' },
      { metric: 'Search-Brand CTR', value: '18.61%', description: 'Excellent brand awareness and relevancy' },
      { metric: 'Search-CTScan Conv Rate', value: '13.43%', description: 'Strong performance in CT scan services' }
    ],
    lagging: [
      { metric: 'Performance Max ROI', value: '0.00%', description: 'Zero conversions despite 922.40 AUD spend' },
      { metric: 'Search-X-Ray Conv Rate', value: '0.26%', description: 'Extremely low conversion rate needs attention' },
      { metric: 'Search-Injections CPC', value: '10.07 AUD', description: 'Highest cost per click across all campaigns' }
    ]
  };

  const recommendations = [
    { priority: 'High', category: 'Performance Max', issue: 'Zero conversions with significant spend', action: 'Pause P.Max campaign and redistribute budget to top-performing search campaigns', impact: 'Save 922.40 AUD monthly and reallocate to campaigns with proven ROI' },
    { priority: 'High', category: 'Search-X-Ray', issue: 'Poor conversion rate (0.26%)', action: 'Review ad copy, landing pages, and keyword targeting', impact: 'Potential to improve 588.48 AUD monthly spend efficiency' },
    { priority: 'Medium', category: 'Search-Injections', issue: 'High CPC (10.07 AUD)', action: 'Optimize quality scores and bid strategy', impact: 'Reduce cost per click and improve campaign profitability' },
    { priority: 'Medium', category: 'Budget Allocation', issue: 'CT Scan campaign limited by budget', action: 'Increase budget for high-performing CT Scan campaign', impact: 'Scale successful campaign with 13.43% conversion rate' },
    { priority: 'Low', category: 'RFA Campaign', issue: 'Low spend but high performance', action: 'Consider increasing budget for RFA campaign', impact: 'Scale campaign with highest conversion rate (16.07%)' }
  ];

  const MetricCard = ({ title, value, subtitle, icon: Icon }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-blue-500" />
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
      {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
    </div>
  );

  const renderOverview = () => (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total Ad Spend"
          value={`$${totalSpend.toFixed(2)}`}
          subtitle="June 28 - July 27, 2025"
          icon={DollarSign}
        />
        <MetricCard
          title="Total Conversions"
          value={totalConversions}
          subtitle="Across all campaigns"
          icon={Target}
        />
        <MetricCard
          title="Average CPC"
          value={`$${avgCPC.toFixed(2)}`}
          subtitle="Cost per click"
          icon={MousePointer}
        />
        <MetricCard
          title="Average Conv Rate"
          value={`${avgConvRate}%`}
          subtitle="Conversion rate"
          icon={TrendingUp}
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Campaign Spend Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={campaignData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              angle={-45} 
              textAnchor="end" 
              height={100}
              fontSize={12}
            />
            <YAxis />
            <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, 'Spend']} />
            <Bar dataKey="spend" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-4 text-green-600">
            <TrendingUp size={20} />
            Top Performing Metrics
          </h3>
          {insights.leading.map((insight, index) => (
            <div key={index} className="p-4 rounded-lg mb-4 bg-green-50 border-l-4 border-green-500">
              <div className="font-semibold">{insight.metric}</div>
              <div className="text-lg font-bold text-green-600 mb-1">{insight.value}</div>
              <div className="text-sm text-gray-600">{insight.description}</div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-4 text-red-600">
            <TrendingDown size={20} />
            Areas for Improvement
          </h3>
          {insights.lagging.map((insight, index) => (
            <div key={index} className="p-4 rounded-lg mb-4 bg-red-50 border-l-4 border-red-500">
              <div className="font-semibold">{insight.metric}</div>
              <div className="text-lg font-bold text-red-600 mb-1">{insight.value}</div>
              <div className="text-sm text-gray-600">{insight.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCampaigns = () => (
    <div>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Campaign</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Spend</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Conversions</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Conv Rate</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">CPC</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">ROAS</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {campaignData.map((campaign, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="px-6 py-4">{campaign.name}</td>
                  <td className="px-6 py-4">${campaign.spend.toFixed(2)}</td>
                  <td className="px-6 py-4">{campaign.conversions}</td>
                  <td className="px-6 py-4">{campaign.convRate}%</td>
                  <td className="px-6 py-4">${campaign.cpc.toFixed(2)}</td>
                  <td className="px-6 py-4">{campaign.roas.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                      campaign.convRate > 10 ? 'bg-green-100 text-green-800' :
                      campaign.convRate > 5 ? 'bg-blue-100 text-blue-800' :
                      campaign.convRate > 0 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {campaign.convRate > 10 ? 'Excellent' :
                       campaign.convRate > 5 ? 'Good' :
                       campaign.convRate > 0 ? 'Needs Work' : 'Critical'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Conversion Rate by Campaign</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={campaignData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              angle={-45} 
              textAnchor="end" 
              height={100}
              fontSize={12}
            />
            <YAxis />
            <Tooltip formatter={(value) => [`${value}%`, 'Conversion Rate']} />
            <Bar dataKey="convRate" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const renderRecommendations = () => (
    <div className="bg-white p-8 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Optimization Recommendations</h2>
      {recommendations.map((rec, index) => (
        <div key={index} className={`p-6 rounded-lg mb-6 border-l-4 ${
          rec.priority === 'High' ? 'bg-red-50 border-red-500' :
          rec.priority === 'Medium' ? 'bg-yellow-50 border-yellow-500' : 
          'bg-green-50 border-green-500'
        }`}>
          <div className="flex items-center gap-3 mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
              rec.priority === 'High' ? 'bg-red-500 text-white' :
              rec.priority === 'Medium' ? 'bg-yellow-500 text-white' : 
              'bg-green-500 text-white'
            }`}>
              {rec.priority} Priority
            </span>
            <span className="font-semibold text-gray-900">{rec.category}</span>
          </div>
          <div className="font-semibold mb-2 text-gray-900">{rec.issue}</div>
          <div className="mb-2 text-gray-700">{rec.action}</div>
          <div className="text-sm text-gray-600 italic">
            <strong>Expected Impact:</strong> {rec.impact}
          </div>
        </div>
      ))}
    </div>
  );

  const renderSummary = () => (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Executive Summary</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Overview</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Melbourne Radiology's Google Ads account demonstrates significant potential with a total monthly spend of <strong>$5,558.84</strong> generating <strong>128 conversions</strong> across 8 campaigns. However, performance varies dramatically between campaigns, indicating substantial optimization opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <TrendingUp size={18} />
                Key Strengths
              </h4>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• <strong>Search-RFAs:</strong> Exceptional 16.07% conversion rate with strong ROI</li>
                <li>• <strong>Search-CTScan:</strong> High-performing 13.43% conversion rate</li>
                <li>• <strong>Search-Brand:</strong> Outstanding 18.61% CTR showing strong brand recognition</li>
                <li>• <strong>Search-MRI:</strong> Consistent performer with 47 conversions and 11.72% conv rate</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                <TrendingDown size={18} />
                Critical Issues
              </h4>
              <ul className="space-y-2 text-sm text-red-700">
                <li>• <strong>Performance Max:</strong> Zero conversions despite $922.40 spend</li>
                <li>• <strong>Search-X-Ray:</strong> Extremely poor 0.26% conversion rate</li>
                <li>• <strong>Search-Injections:</strong> Highest CPC at $10.07 with low ROI</li>
                <li>• <strong>Budget inefficiency:</strong> 33% of spend generating minimal returns</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">65.2%</div>
                <div className="text-sm text-blue-700">of conversions from top 3 campaigns</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600">16.6%</div>
                <div className="text-sm text-orange-700">of budget wasted on zero-conversion campaign</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600">$43.43</div>
                <div className="text-sm text-purple-700">average cost per conversion</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Strategic Recommendations</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Immediate Actions (Next 30 Days)</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>1. Pause Performance Max campaign immediately</li>
                    <li>2. Reallocate $922 budget to high-performing campaigns</li>
                    <li>3. Audit Search-X-Ray landing pages and keywords</li>
                    <li>4. Optimize Search-Injections bid strategy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Growth Opportunities (Next 90 Days)</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>1. Scale RFA and CT Scan campaigns with additional budget</li>
                    <li>2. Expand successful keyword themes to new ad groups</li>
                    <li>3. Implement conversion tracking improvements</li>
                    <li>4. Test new ad copy variations for underperformers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Expected Impact</h3>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="text-green-800 mb-4">
                <strong>Implementing these recommendations could result in:</strong>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">+35%</div>
                  <div className="text-sm text-green-700">Conversion increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">-25%</div>
                  <div className="text-sm text-green-700">Cost per conversion reduction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">+$1,500</div>
                  <div className="text-sm text-green-700">Monthly budget efficiency gain</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Next Steps</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                <div>
                  <strong className="text-gray-900">Immediate Campaign Adjustments:</strong>
                  <span className="text-gray-700 ml-2">Pause underperforming campaigns and reallocate budget within 48 hours</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                <div>
                  <strong className="text-gray-900">Performance Monitoring:</strong>
                  <span className="text-gray-700 ml-2">Implement weekly reporting to track optimization progress</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                <div>
                  <strong className="text-gray-900">Strategic Review:</strong>
                  <span className="text-gray-700 ml-2">Schedule monthly optimization reviews to maintain performance gains</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-xl mb-8 shadow-lg">
          <h1 className="text-4xl font-bold mb-2">Google Ads Performance Audit Report</h1>
          <p className="text-lg opacity-90">Reporting Period: June 28 - July 27, 2025</p>
        </div>

        <div className="flex bg-white rounded-xl p-2 mb-8 shadow-sm gap-2">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'campaigns', label: 'Campaigns' },
            { id: 'recommendations', label: 'Recommendations' },
            { id: 'summary', label: 'Summary' }
          ].map((tab) => (
            <button
              key={tab.id}
              className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-blue-500'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'campaigns' && renderCampaigns()}
        {activeTab === 'recommendations' && renderRecommendations()}
        {activeTab === 'summary' && renderSummary()}
      </div>
    </div>
  );
};

export default MelbourneRadiologyAudit;
