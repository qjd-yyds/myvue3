import { Ref, ref } from 'vue';
import { getGroupNum, getPartyInfoList } from '@/api/leader/party';
import { getDict } from '@/hooks/usedict';
import { Igeneral, IgeneralList, Icarousel } from '../useType';
import { getDataByCode } from '../cadre/usetool';

export function useBox() {
  const modelShow = ref(false);
  const partyList = ref([]);
  // 点击处理不同逻辑
  const handleshow = async (item: IgeneralList) => {
    switch (item.type) {
      case 'party':
        handleCodeData(0);
        break;
      case 'village':
        handleCodeData(1);
        break;
      case 'partyMember':
        getPartyInfoList<Icarousel[]>().then(async (res) => {
          if (res.data) {
            // eslint-disable-next-line camelcase
            const { party_type } = await getDict('party_type');
            const list = res.data.map((item) => {
              if (item.partyType) {
                item.remark = party_type.get(item.partyType);
              }
              return item;
            });
            partyList.value = list;
          }
        });
        break;
      case 'villageMember':
        handleCodeData(2);
        break;
      default:
        break;
    }
    modelShow.value = true;
  };
  // 通过code获取不同的值
  const handleCodeData = (code: number) => {
    getDataByCode(code).then((res) => {
      const list = res.map((item: any) => {
        return {
          remark: item.name,
          name: item.residentName,
          id: item.id
        };
      });
      partyList.value = list;
    });
  };
  return {
    modelShow,
    partyList,
    handleshow,
    handleCodeData
  };
}

export function useList() {
  const generalList: Ref<IgeneralList[]> = ref([
    {
      name: '党支部人数',
      type: 'party',
      value: 0
    },
    {
      name: '村委会人数',
      type: 'village',
      value: 0
    },
    {
      name: '党员人数',
      type: 'partyMember',
      value: 0
    },
    {
      name: '乡贤人数',
      type: 'villageMember',
      value: 0
    }
  ]);
  getGroupNum<Igeneral>().then(({ code, data }) => {
    if (code === 200) {
      for (const type in data) {
        const current = generalList.value.find((item) => item.type === type);
        current.value = data[type];
      }
    }
  });
  return {
    generalList
  };
}
