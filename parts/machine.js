var machineConfig = {
  memory: "8G",
  hugepages: null,
  cores: 4,
  threads: 1,
  light_mouse_disable_acceleration: false,
  pci_devices: [
    {
      id: {
        vendor: 0x10de,
        device: 0x1401,
      },
      slot: "0000:01:00.0",
      resettable: false
    }, {
      id: {
        vendor: 0x10de,
        device: 0x0fba,
      },
      slot: "0000:01:00.1",
      resettable: false,
    }
  ],
  network: {
    bridges: [
      'br0'
    ]
  },
  storage: [
    {
      path: '/dev/sdb',
      cache: 'none',
      format: 'raw'
    },
  ],
  usb_devices: [
    {
      binding: {
        ById: {
          vendor: 1133,
          product: 49282
        },
      },
      permanent: false,
      bus: 'Xhci'
    }, {
      binding: {
        ById: {
          vendor: 1241,
          product: 41165
        },
      },
      permanent: false,
      bus: 'Xhci'
    }
  ]
}

module.exports = machineConfig;
