import React, { useEffect, useRef, useState, useMemo } from 'react';
// Use the auto build which registers all controllers/elements/scales/plugins
import ChartJS from 'chart.js/auto';
import { motion } from 'framer-motion';

// chart.js/auto already registers necessary controllers/elements/plugins

const ChartWindow = ({ labels, datasets }) => {
	const canvasRef = useRef(null);
	const containerRef = useRef(null);
	const chartRef = useRef(null);
	const [ready, setReady] = useState(false);
	const [failed, setFailed] = useState(false);

	const defaultData = useMemo(() => ({
		labels: ['2021', '2022', '2023', '2024', '2025'],
		datasets: [
			{
				label: 'Full Stack',
				data: [65, 72, 80, 88, 95],
				borderColor: 'rgba(59,130,246,1)',
				backgroundColor: 'rgba(59,130,246,0.15)',
				tension: 0.3,
			},
			{
				label: 'Data Science',
				data: [55, 66, 75, 82, 90],
				borderColor: 'rgba(16,185,129,1)',
				backgroundColor: 'rgba(16,185,129,0.12)',
				tension: 0.3,
			},
		],
	}), []);

	const data = useMemo(() => {
		if (labels && datasets) return { labels, datasets };
		return defaultData;
	}, [labels, datasets, defaultData]);

	const options = useMemo(() => ({
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: { position: 'top' },
		},
		scales: {
			y: { min: 0, max: 100 },
		},
	}), []);

	useEffect(() => {
		if (!canvasRef.current) return;

		const ctx = canvasRef.current.getContext('2d');
		try {
			// If a chart instance exists on this ref already (HMR/StrictMode), destroy it first
			if (chartRef.current) {
				try { chartRef.current.destroy(); } catch (e) { /* ignore */ }
				chartRef.current = null;
			}

			chartRef.current = new ChartJS(ctx, {
				type: 'line',
				data,
				options,
			});
			setReady(true);
		} catch (err) {
			console.error('Chart creation failed', err);
			setFailed(true);
		}

		// Resize observer to keep canvas in sync with container size
		let ro;
		if (containerRef.current && typeof ResizeObserver !== 'undefined') {
			ro = new ResizeObserver(() => {
				try {
					chartRef.current?.resize();
				} catch (e) {
					// ignore
				}
			});
			ro.observe(containerRef.current);
		}

		return () => {
			try {
				chartRef.current?.destroy();
			} catch (e) {
				// ignore
			}
			if (ro && containerRef.current) ro.unobserve(containerRef.current);
		};
	}, [data, options]);

	return (
		<div className="bg-gray-800 rounded-lg p-4 shadow border border-gray-700 h-full">
			<div className="h-full">
				<h3 className="text-lg font-semibold mb-2 text-white">Skills Progress</h3>
				<p className="text-sm text-gray-400 mb-4">Development expertise over time</p>

				<div ref={containerRef} className="h-72 relative">
					{failed ? (
						<div className="text-red-400">Chart failed to load.</div>
					) : (
						<canvas ref={canvasRef} className="w-full h-full" />
					)}
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: ready ? 1 : 0 }}
					transition={{ delay: 0.15, duration: 0.4 }}
					className="mt-4 grid grid-cols-2 gap-3"
				>
					{data.datasets.map((ds, i) => (
						<div key={i} className="text-center">
							<div className="text-sm font-medium text-gray-300">{ds.label}</div>
							<div className="text-lg font-bold" style={{ color: ds.borderColor }}>
								{ds.data[ds.data.length - 1]}%
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export { ChartWindow };
export default ChartWindow;
